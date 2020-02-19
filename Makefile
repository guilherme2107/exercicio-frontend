build: .clear
	@echo build

install: .clear
	@npm install

server: .clear
	@./node_modules/.bin/http-server

clean:
	@rm -Rf build

clean-all: clean
	@rm -Rf node_modules

.clear:
	@clear