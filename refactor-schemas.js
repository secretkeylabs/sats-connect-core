#!/usr/bin/env node

/**
 * Script to refactor request.ts and response.ts files to extract inline schemas
 * into separate constants with corresponding types.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all request.ts and response.ts files in namespaces directory
const namespacesDir = path.join(__dirname, 'src/request/rpc/objects/namespaces');

function findFiles(dir, pattern) {
  const result = execSync(`find "${dir}" -name "${pattern}"`, { encoding: 'utf-8' });
  return result.trim().split('\n').filter(Boolean);
}

function toCamelCase(str) {
  // Convert "bitcoinGetAccounts" format to remain as is
  return str;
}

function toPascalCase(str) {
  // Convert to PascalCase
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function extractMethodNameFromSchema(schemaName, type) {
  // Extract method name from schema names like:
  // bitcoinGetAccountsRequestSchema -> bitcoinGetAccounts
  // bitcoinGetAccountsSuccessResponseSchema -> bitcoinGetAccounts
  const pattern = type === 'request' ? /^(.+)RequestSchema$/ : /^(.+)SuccessResponseSchema$/;
  const match = schemaName.match(pattern);
  return match ? match[1] : null;
}

function refactorRequestFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Find the request schema export
  const requestSchemaMatch = content.match(
    /export const (\w+RequestSchema) = createRequestSchema\(\{/
  );
  if (!requestSchemaMatch) {
    console.log(`Skipping ${filePath}: No request schema found`);
    return false;
  }

  const requestSchemaName = requestSchemaMatch[1];
  const methodName = extractMethodNameFromSchema(requestSchemaName, 'request');

  if (!methodName) {
    console.log(`Skipping ${filePath}: Could not extract method name`);
    return false;
  }

  const paramsSchemaName = `${methodName}ParamsSchema`;
  const paramsTypeName = toPascalCase(methodName) + 'Params';

  // Extract the paramsSchema value
  const paramsMatch = content.match(/paramsSchema:\s*([\s\S]+?),\s*method:/);
  if (!paramsMatch) {
    console.log(`Skipping ${filePath}: Could not find paramsSchema`);
    return false;
  }

  const paramsSchemaValue = paramsMatch[1].trim();

  // Check if already refactored
  if (content.includes(`export const ${paramsSchemaName}`)) {
    console.log(`Already refactored: ${filePath}`);
    return false;
  }

  // Build the new content
  const imports = content.match(/^([\s\S]+?)(?=export const)/)[1];

  const newContent = `${imports}export const ${paramsSchemaName} = ${paramsSchemaValue};

export type ${paramsTypeName} = v.InferOutput<typeof ${paramsSchemaName}>;

export const ${requestSchemaName} = createRequestSchema({
  paramsSchema: ${paramsSchemaName},
  method:`;

  // Replace in the original content
  const updatedContent = content.replace(
    /export const (\w+RequestSchema) = createRequestSchema\(\{\s*paramsSchema:\s*[\s\S]+?,\s*method:/,
    newContent
  );

  fs.writeFileSync(filePath, updatedContent, 'utf-8');
  console.log(`✓ Refactored: ${filePath}`);
  return true;
}

function refactorResponseFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Find the response schema export
  const responseSchemaMatch = content.match(
    /export const (\w+SuccessResponseSchema) = createSuccessResponseSchema\(\{/
  );
  if (!responseSchemaMatch) {
    console.log(`Skipping ${filePath}: No success response schema found`);
    return false;
  }

  const responseSchemaName = responseSchemaMatch[1];
  const methodName = extractMethodNameFromSchema(responseSchemaName, 'response');

  if (!methodName) {
    console.log(`Skipping ${filePath}: Could not extract method name`);
    return false;
  }

  const resultSchemaName = `${methodName}ResultSchema`;
  const resultTypeName = toPascalCase(methodName) + 'Result';

  // Extract the resultSchema value
  const resultMatch = content.match(/resultSchema:\s*([\s\S]+?),\s*method:/);
  if (!resultMatch) {
    console.log(`Skipping ${filePath}: Could not find resultSchema`);
    return false;
  }

  const resultSchemaValue = resultMatch[1].trim();

  // Check if already refactored
  if (content.includes(`export const ${resultSchemaName}`)) {
    console.log(`Already refactored: ${filePath}`);
    return false;
  }

  // Build the new content
  const imports = content.match(/^([\s\S]+?)(?=export const)/)[1];

  const newContent = `${imports}export const ${resultSchemaName} = ${resultSchemaValue};

export type ${resultTypeName} = v.InferOutput<typeof ${resultSchemaName}>;

export const ${responseSchemaName} = createSuccessResponseSchema({
  resultSchema: ${resultSchemaName},
  method:`;

  // Replace in the original content
  const updatedContent = content.replace(
    /export const (\w+SuccessResponseSchema) = createSuccessResponseSchema\(\{\s*resultSchema:\s*[\s\S]+?,\s*method:/,
    newContent
  );

  fs.writeFileSync(filePath, updatedContent, 'utf-8');
  console.log(`✓ Refactored: ${filePath}`);
  return true;
}

// Main execution
console.log('Finding request.ts files...');
const requestFiles = findFiles(namespacesDir, 'request.ts');
console.log(`Found ${requestFiles.length} request.ts files`);

console.log('\nFinding response.ts files...');
const responseFiles = findFiles(namespacesDir, 'response.ts');
console.log(`Found ${responseFiles.length} response.ts files`);

let requestCount = 0;
let responseCount = 0;

console.log('\n=== Refactoring Request Files ===');
for (const file of requestFiles) {
  try {
    if (refactorRequestFile(file)) {
      requestCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log('\n=== Refactoring Response Files ===');
for (const file of responseFiles) {
  try {
    if (refactorResponseFile(file)) {
      responseCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\n=== Summary ===`);
console.log(`Request files refactored: ${requestCount} / ${requestFiles.length}`);
console.log(`Response files refactored: ${responseCount} / ${responseFiles.length}`);
console.log(
  `Total files refactored: ${requestCount + responseCount} / ${requestFiles.length + responseFiles.length}`
);
