OVERVIEW_SCRIPT=src/helper/index.ts
GIT_MESSAGE?=$(shell git log --oneline --format=%B -n 1 HEAD | head -n 1)

create-overview:
	@echo '-> creating blog overview file'
	@ts-node ${OVERVIEW_SCRIPT}

build: create-overview
	@echo '-> build angular application'
	@ng build --prod

deploy: build
	@echo '-> deploy to thesilk-tux.github.io'
	@ngh --message=${GIT_MESSAGE}
	@ngh --branch=master
	@ngh
