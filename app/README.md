### Common errors:
You might face issues with node.js version incompatability
We recommend version 16.13.1


#### 0308010C:digital envelope routines::unsupported"
(With node 17+)
https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported

Solution: downgrade node.js to 16.13.1

#### The engine "node" is incompatible with this module
https://stackoverflow.com/questions/56617209/the-engine-node-is-incompatible-with-this-module

Solution: upgrage node.js to 16.13.1


### Enable ESLint plugin prettier (not the same as prettier extension) to format code on save

Modify or add this lines to vscode settings.json
```
    "eslint.enable": true,
    "editor.codeActionsOnSave":{
        "source.fixAll": true
    },
    "eslint.format.enable": true,

```

Set ```code actions on save = all``` in vsCode settings