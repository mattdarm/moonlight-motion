'use strict';

var DG = window.DG || {};

function bh(selector) {
  return $('[data-behaviour="' + selector + '"]');
}

function byElement(selector) {
  return $('[data-element="' + selector + '"]');
}

function dataString(attribute, selector) {
  return '[data-' + attribute + '="' + selector + '"]';
}