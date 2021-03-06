#!/usr/bin/env node

var fs = require('fs')
var lib = require('../lib')
var program = require('commander')
var pkg = fs.readFileSync(__dirname.replace(/\\bin/,'')+'/package.json')
var version = JSON.parse(pkg).version

program
    .version(version)

program
    .command('init')
    .description('初始化项目目录')
    .action(function() {
       lib.init()
    });

program
    .command('create')
    .description('初始化版本目录')
    .action(function() {
       lib.create()
    })

program
    .command('update')
    .description('更新配置文件')
    .action(function() {
       lib.update()
    })

program
    .command('*')
    .action(function(env) {
        console.log('无效的参数名："%s"，请输入 fas --help 查看参数介绍 ', env)
    })

program.parse(process.argv)

