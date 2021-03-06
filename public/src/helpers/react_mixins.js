//libs
import {  _, reqwest, eventEmitter } from './libs.js';
import React from 'react';

export var ModelEventsMixin = {
    listener: function () {
        this.forceUpdate()
    },
    componentWillMount: function () {
        this.modelsToListen.forEach((model_name) => {
            eventEmitter.addListener(model_name + '_model_update', this.listener);
        });
    },
    componentWillUnmount: function () {
        this.modelsToListen.forEach((model_name) => {
            eventEmitter.removeListener(model_name + '_model_update', this.listener);
        });
    },
    shouldComponentUpdate: () => false
};

