install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
publish:
	npm run prepublishOnly

lint:
	npx eslint .
