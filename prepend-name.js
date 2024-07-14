const { execSync } = require('child_process');

// Get the arguments passed to the script
const args = process.argv.slice(2);

// Ensure the first argument is `--name`
if (args.length > 0 && !args[0].startsWith('--name')) {
  args.unshift('--name', args.shift());
}

const command = `npx ${args.join(' ')}`;

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}
