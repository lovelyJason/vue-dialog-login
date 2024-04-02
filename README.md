# vue-dialog-login

> a dialog for login or register

# Introduction

- This is  a lightweight  plugin for login or  register in web application
- It provide many animation effcts to select and you don't have to consider browser compatibility

## Install

```
npm install vue-dialog-login -S
```

# Quick Start

```
import Vue from 'vue'
import Dialog from 'vue-dialog-login'

Vue.use(Dialog)
```

## Use in component

```
<template>
	<div>
		<vue-dialog :flagObj="flagObj" :type="type"></vue-dialog>
	</div>
<template>

<script>
	export default {
        data: function(){
            return {
                flagObj:{flag:false},
                type: '8'
            }
        }
	}
</script>
```

