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



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
