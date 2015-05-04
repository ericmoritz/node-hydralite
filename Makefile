.PHONY: compile test doc

all: hydraLite.js test

hydraLite.js:
	babel src/hydraLite.es -o hydraLite.js

test:
	npm test

deploy:
	git -C docs push origin
	git push origin master
