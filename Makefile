install:
	npm install
start:
	npx babel-node -- src/index.js
publish:
	npm run prepublishOnly
