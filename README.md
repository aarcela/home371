# home371

Home page of Group371

# Compile JS with esbuild

./node_modules/.bin/esbuild js/bundle.ts --bundle --minify --outfile=./js/out.js

# Complie CSS with esbuild

./node_modules/.bin/esbuild css/style.css --bundle --minify --loader:.webp=dataurl --outfile=./css/out.css
