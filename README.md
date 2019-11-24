To use the boilerplate: 
- In terminal, from your project root, run `npm install`
- Edit `GruntConfig.json` to meet your requirments
- Ensure there is a `.gitignore` file with the following:
```
.sass-cache
.DS_Store
node_modules
*.map
/path/to/build/directory
```
- In terminal from your project root, run `grunt` to compile and watch for further changes; or
- Run `grunt build` to simply build the project
