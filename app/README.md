### Enable ESLint plugin prettier (not the same as prettier extension) for code formatting

Modify or add this lines to vscode settings.json
```
    "eslint.enable": true,
    "editor.codeActionsOnSave":{
        "source.fixAll": true
    },
    "eslint.format.enable": true,

```

Set ```code actions on save = all``` in vsCode settings