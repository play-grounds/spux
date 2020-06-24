var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var n,l,u,i,t,o,r,f,e={},c=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return y(n,o,l&&l.key,l&&l.ref,null)}function y(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),n.vnode&&n.vnode(r),r}function p(){return {}}function d(n){return n.children}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l)return n.__?w(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?w(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function g(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!i++||o!==n.debounceRendering)&&((o=n.debounceRendering)||t)(_);}function _(){for(var n;i=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=i,t=z(f,o,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==r?w(o):r),T(u,o),t!=r&&k(o)));});}function b(n,l,u,i,t,o,r,f,a,s){var h,p,m,k,g,_,b,x,A,P=i&&i.__k||c,C=P.length;for(a==e&&(a=null!=r?r[0]:C?w(i,0):null),u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?y(null,k,null,null,k):Array.isArray(k)?y(d,{children:k},null,null,null):null!=k.__e||null!=k.__c?y(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(m=P[h])||m&&k.key==m.key&&k.type===m.type)P[h]=void 0;else for(p=0;p<C;p++){if((m=P[p])&&k.key==m.key&&k.type===m.type){P[p]=void 0;break}m=null;}if(g=z(n,k,m=m||e,t,o,r,f,a,s),(p=k.ref)&&m.ref!=p&&(x||(x=[]),m.ref&&x.push(m.ref,null,k),x.push(p,k.__c||g,k)),null!=g){if(null==b&&(b=g),A=void 0,void 0!==k.__d)A=k.__d,k.__d=void 0;else if(r==m||g!=a||null==g.parentNode){n:if(null==a||a.parentNode!==n)n.appendChild(g),A=null;else {for(_=a,p=0;(_=_.nextSibling)&&p<C;p+=2)if(_==g)break n;n.insertBefore(g,a),A=a;}"option"==u.type&&(n.value="");}a=void 0!==A?A:g.nextSibling,"function"==typeof u.type&&(u.__d=a);}else a&&m.__e==a&&a.parentNode!=n&&(a=w(m));}if(u.__e=b,null!=r&&"function"!=typeof u.type)for(h=r.length;h--;)null!=r[h]&&v(r[h]);for(h=C;h--;)null!=P[h]&&D(P[h],P[h]);if(x)for(h=0;h<x.length;h++)j(x[h],x[++h],x[++h]);}function x(n){return null==n||"boolean"==typeof n?[]:Array.isArray(n)?c.concat.apply([],n.map(x)):[n]}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===a.test(l)?u+"px":null==u?"":u;}function C(n,l,u,i,t){var o,r,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else {if("string"==typeof i&&(o.cssText="",i=null),i)for(e in i)u&&e in u||P(o,e,"");if(u)for(c in u)i&&u[c]===i[c]||P(o,c,u[c]);}else "o"===l[0]&&"n"===l[1]?(r=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,N,r),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,r)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function N(l){this.l[l.type](n.event?n.event(l):l);}function z(l,u,i,t,o,r,f,e,c){var a,v,h,y,p,w,k,g,_,x,A,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,_=(a=P.contextType)&&t[a.__c],x=a?_?_.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new m(g,x),v.constructor=P,v.render=E),_&&_.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,p=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){for(v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,p,w);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,p)),A=null!=a&&a.type==d&&null==a.key?a.props.children:a,b(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=$(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,n.__e(l,u,i);}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function $(n,l,u,i,t,o,r,f){var a,s,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(a=0;a<o.length;a++)if(null!=(s=o[a])&&((null===l.type?3===s.nodeType:s.localName===l.type)||n==s)){n=s,o[a]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,f=!1;}if(null===l.type)p!==d&&n.data!=d&&(n.data=d);else {if(null!=o&&(o=c.slice.call(n.childNodes)),v=(p=u.props||e).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!f){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,f),h?l.__k=[]:(a=l.props.children,b(n,Array.isArray(a)?a:[a],l,u,i,"foreignObject"!==l.type&&t,o,r,e,f)),f||("value"in d&&void 0!==(a=d.value)&&a!==n.value&&C(n,"value",a,p.value,!1),"checked"in d&&void 0!==(a=d.checked)&&a!==n.checked&&C(n,"checked",a,p.checked,!1));}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function D(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&D(t[r],u,i);null!=o&&v(o);}function E(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,o,f;n.__&&n.__(l,u),o=(t=i===r)?null:i&&i.__k||u.__k,l=h(d,null,[l]),f=[],z(u,(t?u:i||u).__k=l,o||e,e,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:u.childNodes.length?c.slice.call(u.childNodes):null,f,i||e,t),T(f,l);}function I(n,l){H(n,l,r);}function L(n,l){var u,i;for(i in l=s(s({},n.props),l),arguments.length>2&&(l.children=c.slice.call(arguments,2)),u={},l)"key"!==i&&"ref"!==i&&(u[i]=l[i]);return y(n.type,u,l.key||n.key,l.ref||n.ref,null)}function M(n){var l={},u={__c:"__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(n){t.props.value!==n.value&&i.some(function(l){l.context=n.value,g(l);});},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Consumer.contextType=u,u.Provider.__=u,u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return g(u.__E=u)}catch(l){n=l;}throw n}},l=function(n){return null!=n&&void 0===n.constructor},m.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),g(this));},m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this));},m.prototype.render=d,u=[],i=0,t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=e,f=0;

var preact_module = /*#__PURE__*/Object.freeze({
	__proto__: null,
	render: H,
	hydrate: I,
	createElement: h,
	h: h,
	Fragment: d,
	createRef: p,
	get isValidElement () { return l; },
	Component: m,
	cloneElement: L,
	createContext: M,
	toChildArray: x,
	_unmount: D,
	get options () { return n; }
});

var preactMdl = createCommonjsModule(function (module, exports) {
(function (global, factory) {
   factory(exports, preact_module) ;
}(commonjsGlobal, function (exports,preact) {
  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var options = {};

  function mdl() {
  	return options.mdl || options.componentHandler || window.componentHandler;
  }

  var RIPPLE_CLASS = 'js-ripple-effect';

  var MDL_PREFIX = function (s) {
  	return MDL_NO_PREFIX[s] ? s : 'mdl-' + s;
  };

  var MDL_NO_PREFIX = { 'is-active': true };

  var uidCounter = 1;

  function uid() {
  	return ++uidCounter;
  }

  function extend(base, props) {
  	for (var i in props) {
  		if (props.hasOwnProperty(i)) base[i] = props[i];
  	}return base;
  }

  function setClass(attributes, value, append) {
  	var cl = getClass(attributes);
  	if (attributes.className) delete attributes.className;
  	if (append) value = cl ? cl + ' ' + value : value;
  	attributes.class = value;
  }

  function getClass(attributes) {
  	return attributes.class || attributes.className;
  }

  var propMaps = {
  	disabled: function (_ref) {
  		var attributes = _ref.attributes;

  		if (attributes.hasOwnProperty('disabled') && !attributes.disabled) {
  			attributes.disabled = null;
  		}
  	},
  	badge: function (_ref2) {
  		var attributes = _ref2.attributes;

  		attributes['data-badge'] = attributes.badge;
  		delete attributes.badge;
  		setClass(attributes, 'mdl-badge', true);
  	},
  	active: function (_ref3) {
  		var attributes = _ref3.attributes;

  		if (attributes.active) {
  			setClass(attributes, 'is-active', true);
  		}
  	},
  	shadow: function (_ref4) {
  		var attributes = _ref4.attributes;

  		var d = parseFloat(attributes.shadow) | 0,
  		    c = getClass(attributes).replace(/\smdl-[^ ]+--shadow\b/g, '');
  		setClass(attributes, c + (c ? ' ' : '') + ('mdl-shadow--' + d + 'dp'));
  	}
  };

  var MaterialComponent = function (_Component) {
  	inherits(MaterialComponent, _Component);

  	function MaterialComponent() {
  		var _temp, _this, _ret;

  		classCallCheck(this, MaterialComponent);

  		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
  			args[_key] = arguments[_key];
  		}

  		return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.component = 'none', _this.js = false, _this.ripple = false, _this.mdlClasses = null, _this.upgradedBase = null, _temp), possibleConstructorReturn(_this, _ret);
  	}

  	MaterialComponent.prototype.mdlRender = function mdlRender(props) {
  		return preact.h(
  			'div',
  			props,
  			props.children
  		);
  	};

  	MaterialComponent.prototype.render = function render(props, state) {
  		var r = this.mdlRender(props, state);
  		if (this.nodeName) r.nodeName = this.nodeName;
  		if (!r.attributes) r.attributes = {};
  		r.attributes.class = this.createMdlClasses(props).concat(r.attributes.class || [], r.attributes.className || []).join(' ');
  		for (var i in propMaps) {
  			if (propMaps.hasOwnProperty(i)) {
  				if (props.hasOwnProperty(i)) {
  					propMaps[i](r);
  				}
  			}
  		}if (this.base && this.upgradedBase) {
  			this.preserveMdlDom(this.base, r);
  		}
  		return r;
  	};

  	MaterialComponent.prototype.preserveMdlDom = function preserveMdlDom(base, r) {
  		if (!base || !base.hasAttribute || !r) return;

  		var c = base.childNodes,
  		    persist = ['mdl-js-ripple-effect--ignore-events', 'mdl-js-ripple-effect', 'is-upgraded', 'is-dirty'],
  		    v = base.getAttribute('data-upgraded'),
  		    a = r.attributes,
  		    cl = getClass(a) || '';

  		if (!a) a = {};

  		if (v) {
  			a['data-upgraded'] = v;
  			upgradeQueue.add(base);
  		}

  		if (base.hasAttribute('ink-enabled')) {
  			if (!r.attributes) r.attributes = {};
  			r.attributes['ink-enabled'] = 'true';
  		}

  		for (var i = 0; i < persist.length; i++) {
  			if (base.classList.contains(persist[i])) {
  				if (typeof a.class === 'string') {
  					if (cl.indexOf(persist[i]) === -1) {
  						cl += ' ' + persist[i];
  					}
  				} else {
  					(cl || (cl = {}))[persist[i]] = true;
  				}
  			}
  		}

  		setClass(a, cl);
  	};

  	MaterialComponent.prototype.createMdlClasses = function createMdlClasses(props) {
  		var name = this.component,
  		    c = [],
  		    mapping = this.propClassMapping || {},
  		    js = props.js !== false && (this.js || this.ripple);
  		if (name) c.push(name);
  		if (this.mdlClasses) c.push.apply(c, this.mdlClasses);
  		if (this.ripple && props.ripple !== false) {
  			c.push(RIPPLE_CLASS);
  		}
  		if (js) c.push('js-' + name);
  		for (var i in props) {
  			if (props.hasOwnProperty(i) && props[i] === true) {
  				c.push(MDL_NO_PREFIX[i] ? i : mapping[i] || name + '--' + i);
  			}
  		}
  		return c.map(MDL_PREFIX);
  	};

  	MaterialComponent.prototype.componentDidMount = function componentDidMount() {
  		if (this.base !== this.upgradedBase) {
  			if (this.upgradedBase) {
  				mdl().downgradeElements(this.upgradedBase);
  			}
  			this.upgradedBase = null;
  			if (this.base && this.base.parentElement) {
  				this.upgradedBase = this.base;
  				mdl().upgradeElement(this.base);
  			}
  		}
  	};

  	MaterialComponent.prototype.componentWillUnmount = function componentWillUnmount() {
  		if (this.upgradedBase) {
  			mdl().downgradeElements(this.upgradedBase);
  			this.upgradedBase = null;
  		}
  	};

  	return MaterialComponent;
  }(preact.Component);

  var upgradeQueue = {
  	items: [],
  	add: function (base) {
  		if (upgradeQueue.items.push(base) === 1) {
  			requestAnimationFrame(upgradeQueue.process);
  		}
  	},
  	process: function () {
  		var p = upgradeQueue.items;
  		for (var i = p.length; i--;) {
  			var el = p[i],
  			    v = el.getAttribute('data-upgraded'),
  			    u = v && v.split(',');
  			if (!u) continue;
  			for (var j = u.length; j--;) {
  				var c = u[j],
  				    a = c && el[c];
  				if (a) {
  					if (a.updateClasses_) {
  						a.updateClasses_();
  					}
  					if (a.onFocus_ && a.input_ && a.input_.matches && a.input_.matches(':focus')) {
  						a.onFocus_();
  					}
  				}
  			}
  		}
  		p.length = 0;
  	}
  };

  var Icon = function (_MaterialComponent) {
  	inherits(Icon, _MaterialComponent);

  	function Icon() {
  		classCallCheck(this, Icon);
  		return possibleConstructorReturn(this, _MaterialComponent.apply(this, arguments));
  	}

  	Icon.prototype.mdlRender = function mdlRender(props) {
  		var c = getClass(props) || '',
  		    icon = String(props.icon || props.children).replace(/[ -]/g, '_');
  		delete props.icon;
  		delete props.className;
  		if (typeof c === 'string') {
  			c = 'material-icons ' + c;
  		} else {
  			c['material-icons'] = true;
  		}
  		return preact.h(
  			'i',
  			_extends({}, props, { 'class': c }),
  			icon
  		);
  	};

  	return Icon;
  }(MaterialComponent);

  var Button = function (_MaterialComponent2) {
  	inherits(Button, _MaterialComponent2);

  	function Button() {
  		var _temp2, _this3, _ret2;

  		classCallCheck(this, Button);

  		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
  			args[_key2] = arguments[_key2];
  		}

  		return _ret2 = (_temp2 = (_this3 = possibleConstructorReturn(this, _MaterialComponent2.call.apply(_MaterialComponent2, [this].concat(args))), _this3), _this3.component = 'button', _this3.nodeName = 'button', _this3.js = true, _this3.ripple = true, _temp2), possibleConstructorReturn(_this3, _ret2);
  	}

  	return Button;
  }(MaterialComponent);

  var Card = function (_MaterialComponent3) {
  	inherits(Card, _MaterialComponent3);

  	function Card() {
  		var _temp3, _this4, _ret3;

  		classCallCheck(this, Card);

  		for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
  			args[_key3] = arguments[_key3];
  		}

  		return _ret3 = (_temp3 = (_this4 = possibleConstructorReturn(this, _MaterialComponent3.call.apply(_MaterialComponent3, [this].concat(args))), _this4), _this4.component = 'card', _temp3), possibleConstructorReturn(_this4, _ret3);
  	}

  	return Card;
  }(MaterialComponent);

  var CardTitle = function (_MaterialComponent4) {
  	inherits(CardTitle, _MaterialComponent4);

  	function CardTitle() {
  		var _temp4, _this5, _ret4;

  		classCallCheck(this, CardTitle);

  		for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
  			args[_key4] = arguments[_key4];
  		}

  		return _ret4 = (_temp4 = (_this5 = possibleConstructorReturn(this, _MaterialComponent4.call.apply(_MaterialComponent4, [this].concat(args))), _this5), _this5.component = 'card__title', _this5.propClassMapping = {
  			expand: 'card--expand'
  		}, _temp4), possibleConstructorReturn(_this5, _ret4);
  	}

  	return CardTitle;
  }(MaterialComponent);

  var CardTitleText = function (_MaterialComponent5) {
  	inherits(CardTitleText, _MaterialComponent5);

  	function CardTitleText() {
  		var _temp5, _this6, _ret5;

  		classCallCheck(this, CardTitleText);

  		for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
  			args[_key5] = arguments[_key5];
  		}

  		return _ret5 = (_temp5 = (_this6 = possibleConstructorReturn(this, _MaterialComponent5.call.apply(_MaterialComponent5, [this].concat(args))), _this6), _this6.component = 'card__title-text', _this6.nodeName = 'h2', _temp5), possibleConstructorReturn(_this6, _ret5);
  	}

  	return CardTitleText;
  }(MaterialComponent);

  var CardMedia = function (_MaterialComponent6) {
  	inherits(CardMedia, _MaterialComponent6);

  	function CardMedia() {
  		var _temp6, _this7, _ret6;

  		classCallCheck(this, CardMedia);

  		for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
  			args[_key6] = arguments[_key6];
  		}

  		return _ret6 = (_temp6 = (_this7 = possibleConstructorReturn(this, _MaterialComponent6.call.apply(_MaterialComponent6, [this].concat(args))), _this7), _this7.component = 'card__media', _temp6), possibleConstructorReturn(_this7, _ret6);
  	}

  	return CardMedia;
  }(MaterialComponent);

  var CardText = function (_MaterialComponent7) {
  	inherits(CardText, _MaterialComponent7);

  	function CardText() {
  		var _temp7, _this8, _ret7;

  		classCallCheck(this, CardText);

  		for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
  			args[_key7] = arguments[_key7];
  		}

  		return _ret7 = (_temp7 = (_this8 = possibleConstructorReturn(this, _MaterialComponent7.call.apply(_MaterialComponent7, [this].concat(args))), _this8), _this8.component = 'card__supporting-text', _temp7), possibleConstructorReturn(_this8, _ret7);
  	}

  	return CardText;
  }(MaterialComponent);

  var CardActions = function (_MaterialComponent8) {
  	inherits(CardActions, _MaterialComponent8);

  	function CardActions() {
  		var _temp8, _this9, _ret8;

  		classCallCheck(this, CardActions);

  		for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
  			args[_key8] = arguments[_key8];
  		}

  		return _ret8 = (_temp8 = (_this9 = possibleConstructorReturn(this, _MaterialComponent8.call.apply(_MaterialComponent8, [this].concat(args))), _this9), _this9.component = 'card__actions', _temp8), possibleConstructorReturn(_this9, _ret8);
  	}

  	return CardActions;
  }(MaterialComponent);

  var CardMenu = function (_MaterialComponent9) {
  	inherits(CardMenu, _MaterialComponent9);

  	function CardMenu() {
  		var _temp9, _this10, _ret9;

  		classCallCheck(this, CardMenu);

  		for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
  			args[_key9] = arguments[_key9];
  		}

  		return _ret9 = (_temp9 = (_this10 = possibleConstructorReturn(this, _MaterialComponent9.call.apply(_MaterialComponent9, [this].concat(args))), _this10), _this10.component = 'card__menu', _temp9), possibleConstructorReturn(_this10, _ret9);
  	}

  	return CardMenu;
  }(MaterialComponent);

  extend(Card, {
  	Title: CardTitle,
  	TitleText: CardTitleText,
  	Media: CardMedia,
  	Text: CardText,
  	Actions: CardActions,
  	Menu: CardMenu
  });

  var Dialog = function (_MaterialComponent10) {
  	inherits(Dialog, _MaterialComponent10);

  	function Dialog() {
  		var _temp10, _this11, _ret10;

  		classCallCheck(this, Dialog);

  		for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
  			args[_key10] = arguments[_key10];
  		}

  		return _ret10 = (_temp10 = (_this11 = possibleConstructorReturn(this, _MaterialComponent10.call.apply(_MaterialComponent10, [this].concat(args))), _this11), _this11.component = 'dialog', _this11.nodeName = 'dialog', _this11.show = function () {
  			_this11.base.show();
  		}, _this11.showModal = function () {
  			_this11.base.showModal();
  		}, _this11.close = function () {
  			_this11.base.close && _this11.base.close();
  		}, _temp10), possibleConstructorReturn(_this11, _ret10);
  	}

  	return Dialog;
  }(MaterialComponent);

  var DialogTitle = function (_MaterialComponent11) {
  	inherits(DialogTitle, _MaterialComponent11);

  	function DialogTitle() {
  		var _temp11, _this12, _ret11;

  		classCallCheck(this, DialogTitle);

  		for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
  			args[_key11] = arguments[_key11];
  		}

  		return _ret11 = (_temp11 = (_this12 = possibleConstructorReturn(this, _MaterialComponent11.call.apply(_MaterialComponent11, [this].concat(args))), _this12), _this12.component = 'dialog__title', _temp11), possibleConstructorReturn(_this12, _ret11);
  	}

  	return DialogTitle;
  }(MaterialComponent);

  var DialogContent = function (_MaterialComponent12) {
  	inherits(DialogContent, _MaterialComponent12);

  	function DialogContent() {
  		var _temp12, _this13, _ret12;

  		classCallCheck(this, DialogContent);

  		for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
  			args[_key12] = arguments[_key12];
  		}

  		return _ret12 = (_temp12 = (_this13 = possibleConstructorReturn(this, _MaterialComponent12.call.apply(_MaterialComponent12, [this].concat(args))), _this13), _this13.component = 'dialog__content', _temp12), possibleConstructorReturn(_this13, _ret12);
  	}

  	return DialogContent;
  }(MaterialComponent);

  var DialogActions = function (_MaterialComponent13) {
  	inherits(DialogActions, _MaterialComponent13);

  	function DialogActions() {
  		var _temp13, _this14, _ret13;

  		classCallCheck(this, DialogActions);

  		for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
  			args[_key13] = arguments[_key13];
  		}

  		return _ret13 = (_temp13 = (_this14 = possibleConstructorReturn(this, _MaterialComponent13.call.apply(_MaterialComponent13, [this].concat(args))), _this14), _this14.component = 'dialog__actions', _temp13), possibleConstructorReturn(_this14, _ret13);
  	}

  	return DialogActions;
  }(MaterialComponent);

  extend(Dialog, {
  	Title: DialogTitle,
  	Content: DialogContent,
  	Actions: DialogActions
  });

  var Layout = function (_MaterialComponent14) {
  	inherits(Layout, _MaterialComponent14);

  	function Layout() {
  		var _temp14, _this15, _ret14;

  		classCallCheck(this, Layout);

  		for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
  			args[_key14] = arguments[_key14];
  		}

  		return _ret14 = (_temp14 = (_this15 = possibleConstructorReturn(this, _MaterialComponent14.call.apply(_MaterialComponent14, [this].concat(args))), _this15), _this15.component = 'layout', _this15.js = true, _temp14), possibleConstructorReturn(_this15, _ret14);
  	}

  	return Layout;
  }(MaterialComponent);

  var LayoutHeader = function (_MaterialComponent15) {
  	inherits(LayoutHeader, _MaterialComponent15);

  	function LayoutHeader() {
  		var _temp15, _this16, _ret15;

  		classCallCheck(this, LayoutHeader);

  		for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
  			args[_key15] = arguments[_key15];
  		}

  		return _ret15 = (_temp15 = (_this16 = possibleConstructorReturn(this, _MaterialComponent15.call.apply(_MaterialComponent15, [this].concat(args))), _this16), _this16.component = 'layout__header', _this16.nodeName = 'header', _temp15), possibleConstructorReturn(_this16, _ret15);
  	}

  	return LayoutHeader;
  }(MaterialComponent);

  var LayoutHeaderRow = function (_MaterialComponent16) {
  	inherits(LayoutHeaderRow, _MaterialComponent16);

  	function LayoutHeaderRow() {
  		var _temp16, _this17, _ret16;

  		classCallCheck(this, LayoutHeaderRow);

  		for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
  			args[_key16] = arguments[_key16];
  		}

  		return _ret16 = (_temp16 = (_this17 = possibleConstructorReturn(this, _MaterialComponent16.call.apply(_MaterialComponent16, [this].concat(args))), _this17), _this17.component = 'layout__header-row', _temp16), possibleConstructorReturn(_this17, _ret16);
  	}

  	return LayoutHeaderRow;
  }(MaterialComponent);

  var LayoutTitle = function (_MaterialComponent17) {
  	inherits(LayoutTitle, _MaterialComponent17);

  	function LayoutTitle() {
  		var _temp17, _this18, _ret17;

  		classCallCheck(this, LayoutTitle);

  		for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
  			args[_key17] = arguments[_key17];
  		}

  		return _ret17 = (_temp17 = (_this18 = possibleConstructorReturn(this, _MaterialComponent17.call.apply(_MaterialComponent17, [this].concat(args))), _this18), _this18.component = 'layout-title', _this18.nodeName = 'span', _temp17), possibleConstructorReturn(_this18, _ret17);
  	}

  	return LayoutTitle;
  }(MaterialComponent);

  var LayoutSpacer = function (_MaterialComponent18) {
  	inherits(LayoutSpacer, _MaterialComponent18);

  	function LayoutSpacer() {
  		var _temp18, _this19, _ret18;

  		classCallCheck(this, LayoutSpacer);

  		for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
  			args[_key18] = arguments[_key18];
  		}

  		return _ret18 = (_temp18 = (_this19 = possibleConstructorReturn(this, _MaterialComponent18.call.apply(_MaterialComponent18, [this].concat(args))), _this19), _this19.component = 'layout-spacer', _temp18), possibleConstructorReturn(_this19, _ret18);
  	}

  	return LayoutSpacer;
  }(MaterialComponent);

  var LayoutDrawer = function (_MaterialComponent19) {
  	inherits(LayoutDrawer, _MaterialComponent19);

  	function LayoutDrawer() {
  		var _temp19, _this20, _ret19;

  		classCallCheck(this, LayoutDrawer);

  		for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
  			args[_key19] = arguments[_key19];
  		}

  		return _ret19 = (_temp19 = (_this20 = possibleConstructorReturn(this, _MaterialComponent19.call.apply(_MaterialComponent19, [this].concat(args))), _this20), _this20.component = 'layout__drawer', _temp19), possibleConstructorReturn(_this20, _ret19);
  	}

  	return LayoutDrawer;
  }(MaterialComponent);

  var LayoutContent = function (_MaterialComponent20) {
  	inherits(LayoutContent, _MaterialComponent20);

  	function LayoutContent() {
  		var _temp20, _this21, _ret20;

  		classCallCheck(this, LayoutContent);

  		for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
  			args[_key20] = arguments[_key20];
  		}

  		return _ret20 = (_temp20 = (_this21 = possibleConstructorReturn(this, _MaterialComponent20.call.apply(_MaterialComponent20, [this].concat(args))), _this21), _this21.component = 'layout__content', _this21.nodeName = 'main', _temp20), possibleConstructorReturn(_this21, _ret20);
  	}

  	return LayoutContent;
  }(MaterialComponent);

  var LayoutTabBar = function (_MaterialComponent21) {
  	inherits(LayoutTabBar, _MaterialComponent21);

  	function LayoutTabBar() {
  		var _temp21, _this22, _ret21;

  		classCallCheck(this, LayoutTabBar);

  		for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
  			args[_key21] = arguments[_key21];
  		}

  		return _ret21 = (_temp21 = (_this22 = possibleConstructorReturn(this, _MaterialComponent21.call.apply(_MaterialComponent21, [this].concat(args))), _this22), _this22.component = 'layout__tab-bar', _this22.js = true, _this22.ripple = false, _temp21), possibleConstructorReturn(_this22, _ret21);
  	}

  	return LayoutTabBar;
  }(MaterialComponent);

  var LayoutTab = function (_MaterialComponent22) {
  	inherits(LayoutTab, _MaterialComponent22);

  	function LayoutTab() {
  		var _temp22, _this23, _ret22;

  		classCallCheck(this, LayoutTab);

  		for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
  			args[_key22] = arguments[_key22];
  		}

  		return _ret22 = (_temp22 = (_this23 = possibleConstructorReturn(this, _MaterialComponent22.call.apply(_MaterialComponent22, [this].concat(args))), _this23), _this23.component = 'layout__tab', _this23.nodeName = 'a', _temp22), possibleConstructorReturn(_this23, _ret22);
  	}

  	return LayoutTab;
  }(MaterialComponent);

  var LayoutTabPanel = function (_MaterialComponent23) {
  	inherits(LayoutTabPanel, _MaterialComponent23);

  	function LayoutTabPanel() {
  		var _temp23, _this24, _ret23;

  		classCallCheck(this, LayoutTabPanel);

  		for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
  			args[_key23] = arguments[_key23];
  		}

  		return _ret23 = (_temp23 = (_this24 = possibleConstructorReturn(this, _MaterialComponent23.call.apply(_MaterialComponent23, [this].concat(args))), _this24), _this24.component = 'layout__tab-panel', _temp23), possibleConstructorReturn(_this24, _ret23);
  	}

  	LayoutTabPanel.prototype.mdlRender = function mdlRender(props) {
  		return preact.h(
  			'section',
  			props,
  			preact.h(
  				'div',
  				{ 'class': 'page-content' },
  				props.children
  			)
  		);
  	};

  	return LayoutTabPanel;
  }(MaterialComponent);

  extend(Layout, {
  	Header: LayoutHeader,
  	HeaderRow: LayoutHeaderRow,
  	Title: LayoutTitle,
  	Spacer: LayoutSpacer,
  	Drawer: LayoutDrawer,
  	Content: LayoutContent,
  	TabBar: LayoutTabBar,
  	Tab: LayoutTab,
  	TabPanel: LayoutTabPanel
  });

  var Navigation = function (_MaterialComponent24) {
  	inherits(Navigation, _MaterialComponent24);

  	function Navigation() {
  		var _temp24, _this25, _ret24;

  		classCallCheck(this, Navigation);

  		for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
  			args[_key24] = arguments[_key24];
  		}

  		return _ret24 = (_temp24 = (_this25 = possibleConstructorReturn(this, _MaterialComponent24.call.apply(_MaterialComponent24, [this].concat(args))), _this25), _this25.component = 'navigation', _this25.nodeName = 'nav', _this25.propClassMapping = {
  			'large-screen-only': 'layout--large-screen-only'
  		}, _temp24), possibleConstructorReturn(_this25, _ret24);
  	}

  	Navigation.prototype.mdlRender = function mdlRender(props, state) {
  		var r = _MaterialComponent24.prototype.mdlRender.call(this, props, state);
  		r.children.forEach(function (item) {
  			if (!item) return item;
  			var c = item.attributes && getClass(item.attributes) || '';
  			if (!c.match(/\bmdl-navigation__link\b/g)) {
  				if (!item.attributes) item.attributes = {};
  				setClass(item.attributes, ' mdl-navigation__link', true);
  			}
  		});
  		return r;
  	};

  	return Navigation;
  }(MaterialComponent);

  var NavigationLink = function (_MaterialComponent25) {
  	inherits(NavigationLink, _MaterialComponent25);

  	function NavigationLink() {
  		classCallCheck(this, NavigationLink);

  		for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
  			args[_key25] = arguments[_key25];
  		}

  		var _this26 = possibleConstructorReturn(this, _MaterialComponent25.call.apply(_MaterialComponent25, [this].concat(args)));

  		_this26.component = 'navigation__link';
  		_this26.nodeName = 'a';

  		_this26.handleClick = _this26.handleClick.bind(_this26);
  		return _this26;
  	}

  	NavigationLink.prototype.handleClick = function handleClick(e) {
  		var _props = this.props,
  		    route = _props.route,
  		    href = _props.href,
  		    onClick = _props.onClick,
  		    onclick = _props.onclick;

  		onClick = onClick || onclick;
  		if (typeof onClick === 'function' && onClick({ type: 'click', target: this }) === false) ; else if (typeof route === 'function') {
  			route(href);
  		}
  		e.preventDefault();
  		return false;
  	};

  	NavigationLink.prototype.mdlRender = function mdlRender(_ref5, state) {
  		var children = _ref5.children,
  		    props = objectWithoutProperties(_ref5, ['children']);

  		return preact.h(
  			'a',
  			_extends({}, props, { onclick: this.handleClick }),
  			children
  		);
  	};

  	return NavigationLink;
  }(MaterialComponent);

  Navigation.Link = NavigationLink;

  var Tabs = function (_MaterialComponent26) {
  	inherits(Tabs, _MaterialComponent26);

  	function Tabs() {
  		var _temp25, _this27, _ret25;

  		classCallCheck(this, Tabs);

  		for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
  			args[_key26] = arguments[_key26];
  		}

  		return _ret25 = (_temp25 = (_this27 = possibleConstructorReturn(this, _MaterialComponent26.call.apply(_MaterialComponent26, [this].concat(args))), _this27), _this27.component = 'tabs', _this27.js = true, _this27.ripple = false, _temp25), possibleConstructorReturn(_this27, _ret25);
  	}

  	return Tabs;
  }(MaterialComponent);

  var TabBar = function (_MaterialComponent27) {
  	inherits(TabBar, _MaterialComponent27);

  	function TabBar() {
  		var _temp26, _this28, _ret26;

  		classCallCheck(this, TabBar);

  		for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
  			args[_key27] = arguments[_key27];
  		}

  		return _ret26 = (_temp26 = (_this28 = possibleConstructorReturn(this, _MaterialComponent27.call.apply(_MaterialComponent27, [this].concat(args))), _this28), _this28.component = 'tabs__tab-bar', _temp26), possibleConstructorReturn(_this28, _ret26);
  	}

  	return TabBar;
  }(MaterialComponent);

  var Tab = function (_MaterialComponent28) {
  	inherits(Tab, _MaterialComponent28);

  	function Tab() {
  		var _temp27, _this29, _ret27;

  		classCallCheck(this, Tab);

  		for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
  			args[_key28] = arguments[_key28];
  		}

  		return _ret27 = (_temp27 = (_this29 = possibleConstructorReturn(this, _MaterialComponent28.call.apply(_MaterialComponent28, [this].concat(args))), _this29), _this29.component = 'tabs__tab', _this29.nodeName = 'a', _temp27), possibleConstructorReturn(_this29, _ret27);
  	}

  	return Tab;
  }(MaterialComponent);

  var TabPanel = function (_MaterialComponent29) {
  	inherits(TabPanel, _MaterialComponent29);

  	function TabPanel() {
  		var _temp28, _this30, _ret28;

  		classCallCheck(this, TabPanel);

  		for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
  			args[_key29] = arguments[_key29];
  		}

  		return _ret28 = (_temp28 = (_this30 = possibleConstructorReturn(this, _MaterialComponent29.call.apply(_MaterialComponent29, [this].concat(args))), _this30), _this30.component = 'tabs__panel', _this30.nodeName = 'section', _temp28), possibleConstructorReturn(_this30, _ret28);
  	}

  	return TabPanel;
  }(MaterialComponent);

  extend(Tabs, {
  	TabBar: TabBar,
  	Bar: TabBar,
  	Tab: Tab,
  	TabPanel: TabPanel,
  	Panel: TabPanel
  });

  var MegaFooter = function (_MaterialComponent30) {
  	inherits(MegaFooter, _MaterialComponent30);

  	function MegaFooter() {
  		var _temp29, _this31, _ret29;

  		classCallCheck(this, MegaFooter);

  		for (var _len30 = arguments.length, args = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
  			args[_key30] = arguments[_key30];
  		}

  		return _ret29 = (_temp29 = (_this31 = possibleConstructorReturn(this, _MaterialComponent30.call.apply(_MaterialComponent30, [this].concat(args))), _this31), _this31.component = 'mega-footer', _this31.nodeName = 'footer', _temp29), possibleConstructorReturn(_this31, _ret29);
  	}

  	return MegaFooter;
  }(MaterialComponent);

  var MegaFooterMiddleSection = function (_MaterialComponent31) {
  	inherits(MegaFooterMiddleSection, _MaterialComponent31);

  	function MegaFooterMiddleSection() {
  		var _temp30, _this32, _ret30;

  		classCallCheck(this, MegaFooterMiddleSection);

  		for (var _len31 = arguments.length, args = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
  			args[_key31] = arguments[_key31];
  		}

  		return _ret30 = (_temp30 = (_this32 = possibleConstructorReturn(this, _MaterialComponent31.call.apply(_MaterialComponent31, [this].concat(args))), _this32), _this32.component = 'mega-footer__middle-section', _temp30), possibleConstructorReturn(_this32, _ret30);
  	}

  	return MegaFooterMiddleSection;
  }(MaterialComponent);

  var MegaFooterDropDownSection = function (_MaterialComponent32) {
  	inherits(MegaFooterDropDownSection, _MaterialComponent32);

  	function MegaFooterDropDownSection() {
  		var _temp31, _this33, _ret31;

  		classCallCheck(this, MegaFooterDropDownSection);

  		for (var _len32 = arguments.length, args = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
  			args[_key32] = arguments[_key32];
  		}

  		return _ret31 = (_temp31 = (_this33 = possibleConstructorReturn(this, _MaterialComponent32.call.apply(_MaterialComponent32, [this].concat(args))), _this33), _this33.component = 'mega-footer__drop-down-section', _temp31), possibleConstructorReturn(_this33, _ret31);
  	}

  	return MegaFooterDropDownSection;
  }(MaterialComponent);

  var MegaFooterHeading = function (_MaterialComponent33) {
  	inherits(MegaFooterHeading, _MaterialComponent33);

  	function MegaFooterHeading() {
  		var _temp32, _this34, _ret32;

  		classCallCheck(this, MegaFooterHeading);

  		for (var _len33 = arguments.length, args = Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
  			args[_key33] = arguments[_key33];
  		}

  		return _ret32 = (_temp32 = (_this34 = possibleConstructorReturn(this, _MaterialComponent33.call.apply(_MaterialComponent33, [this].concat(args))), _this34), _this34.component = 'mega-footer__heading', _this34.nodeName = 'h1', _temp32), possibleConstructorReturn(_this34, _ret32);
  	}

  	return MegaFooterHeading;
  }(MaterialComponent);

  var MegaFooterLinkList = function (_MaterialComponent34) {
  	inherits(MegaFooterLinkList, _MaterialComponent34);

  	function MegaFooterLinkList() {
  		var _temp33, _this35, _ret33;

  		classCallCheck(this, MegaFooterLinkList);

  		for (var _len34 = arguments.length, args = Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
  			args[_key34] = arguments[_key34];
  		}

  		return _ret33 = (_temp33 = (_this35 = possibleConstructorReturn(this, _MaterialComponent34.call.apply(_MaterialComponent34, [this].concat(args))), _this35), _this35.component = 'mega-footer__link-list', _this35.nodeName = 'ul', _temp33), possibleConstructorReturn(_this35, _ret33);
  	}

  	return MegaFooterLinkList;
  }(MaterialComponent);

  var MegaFooterBottomSection = function (_MaterialComponent35) {
  	inherits(MegaFooterBottomSection, _MaterialComponent35);

  	function MegaFooterBottomSection() {
  		var _temp34, _this36, _ret34;

  		classCallCheck(this, MegaFooterBottomSection);

  		for (var _len35 = arguments.length, args = Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
  			args[_key35] = arguments[_key35];
  		}

  		return _ret34 = (_temp34 = (_this36 = possibleConstructorReturn(this, _MaterialComponent35.call.apply(_MaterialComponent35, [this].concat(args))), _this36), _this36.component = 'mega-footer__bottom-section', _temp34), possibleConstructorReturn(_this36, _ret34);
  	}

  	return MegaFooterBottomSection;
  }(MaterialComponent);

  extend(MegaFooter, {
  	MiddleSection: MegaFooterMiddleSection,
  	DropDownSection: MegaFooterDropDownSection,
  	Heading: MegaFooterHeading,
  	LinkList: MegaFooterLinkList,
  	BottomSection: MegaFooterBottomSection
  });

  var MiniFooter = function (_MaterialComponent36) {
  	inherits(MiniFooter, _MaterialComponent36);

  	function MiniFooter() {
  		var _temp35, _this37, _ret35;

  		classCallCheck(this, MiniFooter);

  		for (var _len36 = arguments.length, args = Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
  			args[_key36] = arguments[_key36];
  		}

  		return _ret35 = (_temp35 = (_this37 = possibleConstructorReturn(this, _MaterialComponent36.call.apply(_MaterialComponent36, [this].concat(args))), _this37), _this37.component = 'mini-footer', _this37.nodeName = 'footer', _temp35), possibleConstructorReturn(_this37, _ret35);
  	}

  	return MiniFooter;
  }(MaterialComponent);

  var MiniFooterLeftSection = function (_MaterialComponent37) {
  	inherits(MiniFooterLeftSection, _MaterialComponent37);

  	function MiniFooterLeftSection() {
  		var _temp36, _this38, _ret36;

  		classCallCheck(this, MiniFooterLeftSection);

  		for (var _len37 = arguments.length, args = Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
  			args[_key37] = arguments[_key37];
  		}

  		return _ret36 = (_temp36 = (_this38 = possibleConstructorReturn(this, _MaterialComponent37.call.apply(_MaterialComponent37, [this].concat(args))), _this38), _this38.component = 'mini-footer__left-section', _temp36), possibleConstructorReturn(_this38, _ret36);
  	}

  	return MiniFooterLeftSection;
  }(MaterialComponent);

  var MiniFooterLinkList = function (_MaterialComponent38) {
  	inherits(MiniFooterLinkList, _MaterialComponent38);

  	function MiniFooterLinkList() {
  		var _temp37, _this39, _ret37;

  		classCallCheck(this, MiniFooterLinkList);

  		for (var _len38 = arguments.length, args = Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
  			args[_key38] = arguments[_key38];
  		}

  		return _ret37 = (_temp37 = (_this39 = possibleConstructorReturn(this, _MaterialComponent38.call.apply(_MaterialComponent38, [this].concat(args))), _this39), _this39.component = 'mini-footer__link-list', _this39.nodeName = 'ul', _temp37), possibleConstructorReturn(_this39, _ret37);
  	}

  	return MiniFooterLinkList;
  }(MaterialComponent);

  extend(MiniFooter, {
  	LeftSection: MiniFooterLeftSection,
  	LinkList: MiniFooterLinkList
  });

  var Grid = function (_MaterialComponent39) {
  	inherits(Grid, _MaterialComponent39);

  	function Grid() {
  		var _temp38, _this40, _ret38;

  		classCallCheck(this, Grid);

  		for (var _len39 = arguments.length, args = Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
  			args[_key39] = arguments[_key39];
  		}

  		return _ret38 = (_temp38 = (_this40 = possibleConstructorReturn(this, _MaterialComponent39.call.apply(_MaterialComponent39, [this].concat(args))), _this40), _this40.component = 'grid', _temp38), possibleConstructorReturn(_this40, _ret38);
  	}

  	return Grid;
  }(MaterialComponent);

  var Cell = function (_MaterialComponent40) {
  	inherits(Cell, _MaterialComponent40);

  	function Cell() {
  		var _temp39, _this41, _ret39;

  		classCallCheck(this, Cell);

  		for (var _len40 = arguments.length, args = Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
  			args[_key40] = arguments[_key40];
  		}

  		return _ret39 = (_temp39 = (_this41 = possibleConstructorReturn(this, _MaterialComponent40.call.apply(_MaterialComponent40, [this].concat(args))), _this41), _this41.component = 'cell', _temp39), possibleConstructorReturn(_this41, _ret39);
  	}

  	return Cell;
  }(MaterialComponent);

  Grid.Cell = Cell;

  var Progress = function (_MaterialComponent41) {
  	inherits(Progress, _MaterialComponent41);

  	function Progress() {
  		var _temp40, _this42, _ret40;

  		classCallCheck(this, Progress);

  		for (var _len41 = arguments.length, args = Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
  			args[_key41] = arguments[_key41];
  		}

  		return _ret40 = (_temp40 = (_this42 = possibleConstructorReturn(this, _MaterialComponent41.call.apply(_MaterialComponent41, [this].concat(args))), _this42), _this42.component = 'progress', _this42.js = true, _temp40), possibleConstructorReturn(_this42, _ret40);
  	}

  	Progress.prototype.mdlRender = function mdlRender(props) {
  		return preact.h(
  			'div',
  			props,
  			preact.h('div', { 'class': 'progressbar bar bar1' }),
  			preact.h('div', { 'class': 'bufferbar bar bar2' }),
  			preact.h('div', { 'class': 'auxbar bar bar3' })
  		);
  	};

  	Progress.prototype.componentDidUpdate = function componentDidUpdate() {
  		var api = this.base.MaterialProgress,
  		    p = this.props;
  		if (p.progress) api.setProgress(p.progress);
  		if (p.buffer) api.setBuffer(p.buffer);
  	};

  	return Progress;
  }(MaterialComponent);

  var Spinner = function (_MaterialComponent42) {
  	inherits(Spinner, _MaterialComponent42);

  	function Spinner() {
  		var _temp41, _this43, _ret41;

  		classCallCheck(this, Spinner);

  		for (var _len42 = arguments.length, args = Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
  			args[_key42] = arguments[_key42];
  		}

  		return _ret41 = (_temp41 = (_this43 = possibleConstructorReturn(this, _MaterialComponent42.call.apply(_MaterialComponent42, [this].concat(args))), _this43), _this43.component = 'spinner', _this43.js = true, _temp41), possibleConstructorReturn(_this43, _ret41);
  	}

  	return Spinner;
  }(MaterialComponent);

  var Menu = function (_MaterialComponent43) {
  	inherits(Menu, _MaterialComponent43);

  	function Menu() {
  		var _temp42, _this44, _ret42;

  		classCallCheck(this, Menu);

  		for (var _len43 = arguments.length, args = Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
  			args[_key43] = arguments[_key43];
  		}

  		return _ret42 = (_temp42 = (_this44 = possibleConstructorReturn(this, _MaterialComponent43.call.apply(_MaterialComponent43, [this].concat(args))), _this44), _this44.component = 'menu', _this44.nodeName = 'ul', _this44.js = true, _this44.ripple = true, _temp42), possibleConstructorReturn(_this44, _ret42);
  	}

  	return Menu;
  }(MaterialComponent);

  var MenuItem = function (_MaterialComponent44) {
  	inherits(MenuItem, _MaterialComponent44);

  	function MenuItem() {
  		var _temp43, _this45, _ret43;

  		classCallCheck(this, MenuItem);

  		for (var _len44 = arguments.length, args = Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
  			args[_key44] = arguments[_key44];
  		}

  		return _ret43 = (_temp43 = (_this45 = possibleConstructorReturn(this, _MaterialComponent44.call.apply(_MaterialComponent44, [this].concat(args))), _this45), _this45.component = 'menu__item', _this45.nodeName = 'li', _temp43), possibleConstructorReturn(_this45, _ret43);
  	}

  	return MenuItem;
  }(MaterialComponent);

  Menu.Item = MenuItem;

  var Slider = function (_MaterialComponent45) {
  	inherits(Slider, _MaterialComponent45);

  	function Slider() {
  		var _temp44, _this46, _ret44;

  		classCallCheck(this, Slider);

  		for (var _len45 = arguments.length, args = Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
  			args[_key45] = arguments[_key45];
  		}

  		return _ret44 = (_temp44 = (_this46 = possibleConstructorReturn(this, _MaterialComponent45.call.apply(_MaterialComponent45, [this].concat(args))), _this46), _this46.component = 'slider', _this46.js = true, _temp44), possibleConstructorReturn(_this46, _ret44);
  	}

  	Slider.prototype.mdlRender = function mdlRender(props) {
  		return preact.h('input', _extends({ type: 'range', tabindex: '0' }, props));
  	};

  	return Slider;
  }(MaterialComponent);

  var Snackbar = function (_MaterialComponent46) {
  	inherits(Snackbar, _MaterialComponent46);

  	function Snackbar() {
  		var _temp45, _this47, _ret45;

  		classCallCheck(this, Snackbar);

  		for (var _len46 = arguments.length, args = Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
  			args[_key46] = arguments[_key46];
  		}

  		return _ret45 = (_temp45 = (_this47 = possibleConstructorReturn(this, _MaterialComponent46.call.apply(_MaterialComponent46, [this].concat(args))), _this47), _this47.component = 'snackbar', _this47.js = true, _temp45), possibleConstructorReturn(_this47, _ret45);
  	}

  	Snackbar.prototype.mdlRender = function mdlRender(props) {
  		return preact.h(
  			'div',
  			props,
  			preact.h(
  				'div',
  				{ 'class': 'mdl-snackbar__text' },
  				props.children
  			),
  			preact.h('button', { 'class': 'mdl-snackbar__action', type: 'button' })
  		);
  	};

  	return Snackbar;
  }(MaterialComponent);

  var CheckBox = function (_MaterialComponent47) {
  	inherits(CheckBox, _MaterialComponent47);

  	function CheckBox() {
  		var _temp46, _this48, _ret46;

  		classCallCheck(this, CheckBox);

  		for (var _len47 = arguments.length, args = Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
  			args[_key47] = arguments[_key47];
  		}

  		return _ret46 = (_temp46 = (_this48 = possibleConstructorReturn(this, _MaterialComponent47.call.apply(_MaterialComponent47, [this].concat(args))), _this48), _this48.component = 'checkbox', _this48.js = true, _this48.ripple = true, _temp46), possibleConstructorReturn(_this48, _ret46);
  	}

  	CheckBox.prototype.getValue = function getValue() {
  		return this.base.children[0].checked;
  	};

  	CheckBox.prototype.mdlRender = function mdlRender(props) {
  		var evt = {};
  		for (var i in props) {
  			if (i.match(/^on[a-z]+$/gi)) {
  				evt[i] = props[i];
  				delete props[i];
  			}
  		}return preact.h(
  			'label',
  			props,
  			preact.h('input', _extends({ type: 'checkbox', 'class': 'mdl-checkbox__input', checked: props.checked, disabled: props.disabled }, evt)),
  			preact.h(
  				'span',
  				{ 'class': 'mdl-checkbox__label' },
  				props.children
  			),
  			preact.h('span', { 'class': 'mdl-checkbox__focus-helper' }),
  			preact.h(
  				'span',
  				{ 'class': 'mdl-checkbox__box-outline' },
  				preact.h('span', { 'class': 'mdl-checkbox__tick-outline' })
  			)
  		);
  	};

  	return CheckBox;
  }(MaterialComponent);

  var Radio = function (_MaterialComponent48) {
  	inherits(Radio, _MaterialComponent48);

  	function Radio() {
  		var _temp47, _this49, _ret47;

  		classCallCheck(this, Radio);

  		for (var _len48 = arguments.length, args = Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
  			args[_key48] = arguments[_key48];
  		}

  		return _ret47 = (_temp47 = (_this49 = possibleConstructorReturn(this, _MaterialComponent48.call.apply(_MaterialComponent48, [this].concat(args))), _this49), _this49.component = 'radio', _this49.js = true, _this49.ripple = true, _temp47), possibleConstructorReturn(_this49, _ret47);
  	}

  	Radio.prototype.getValue = function getValue() {
  		return this.base.children[0].checked;
  	};

  	Radio.prototype.mdlRender = function mdlRender(props) {
  		return preact.h(
  			'label',
  			props,
  			preact.h('input', { type: 'radio', 'class': 'mdl-radio__button', name: props.name, value: props.value, checked: props.checked, disabled: props.disabled }),
  			preact.h(
  				'span',
  				{ 'class': 'mdl-radio__label' },
  				props.children
  			)
  		);
  	};

  	return Radio;
  }(MaterialComponent);

  var IconToggle = function (_MaterialComponent49) {
  	inherits(IconToggle, _MaterialComponent49);

  	function IconToggle() {
  		var _temp48, _this50, _ret48;

  		classCallCheck(this, IconToggle);

  		for (var _len49 = arguments.length, args = Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
  			args[_key49] = arguments[_key49];
  		}

  		return _ret48 = (_temp48 = (_this50 = possibleConstructorReturn(this, _MaterialComponent49.call.apply(_MaterialComponent49, [this].concat(args))), _this50), _this50.component = 'icon-toggle', _this50.js = true, _this50.ripple = true, _temp48), possibleConstructorReturn(_this50, _ret48);
  	}

  	IconToggle.prototype.getValue = function getValue() {
  		return this.base.children[0].checked;
  	};

  	IconToggle.prototype.mdlRender = function mdlRender(props) {
  		return preact.h(
  			'label',
  			props,
  			preact.h('input', { type: 'checkbox', 'class': 'mdl-icon-toggle__input', checked: props.checked, disabled: props.disabled }),
  			preact.h(
  				'span',
  				{ 'class': 'mdl-icon-toggle__label material-icons' },
  				props.children
  			)
  		);
  	};

  	return IconToggle;
  }(MaterialComponent);

  var Switch = function (_MaterialComponent50) {
  	inherits(Switch, _MaterialComponent50);

  	function Switch() {
  		var _temp49, _this51, _ret49;

  		classCallCheck(this, Switch);

  		for (var _len50 = arguments.length, args = Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
  			args[_key50] = arguments[_key50];
  		}

  		return _ret49 = (_temp49 = (_this51 = possibleConstructorReturn(this, _MaterialComponent50.call.apply(_MaterialComponent50, [this].concat(args))), _this51), _this51.component = 'switch', _this51.nodeName = 'label', _this51.js = true, _this51.ripple = true, _temp49), possibleConstructorReturn(_this51, _ret49);
  	}

  	Switch.prototype.shouldComponentUpdate = function shouldComponentUpdate(_ref6) {
  		var checked = _ref6.checked;

  		if (Boolean(checked) === Boolean(this.props.checked)) return false;
  		return true;
  	};

  	Switch.prototype.getValue = function getValue() {
  		return this.base.children[0].checked;
  	};

  	Switch.prototype.mdlRender = function mdlRender(_ref7) {
  		var props = objectWithoutProperties(_ref7, []);

  		var evt = {};
  		for (var i in props) {
  			if (i.match(/^on[a-z]+$/gi)) {
  				evt[i] = props[i];
  				delete props[i];
  			}
  		}return preact.h(
  			'label',
  			props,
  			preact.h('input', _extends({ type: 'checkbox', 'class': 'mdl-switch__input', checked: props.checked, disabled: props.disabled }, evt)),
  			preact.h(
  				'span',
  				{ 'class': 'mdl-switch__label' },
  				props.children
  			),
  			preact.h('div', { 'class': 'mdl-switch__track' }),
  			preact.h(
  				'div',
  				{ 'class': 'mdl-switch__thumb' },
  				preact.h('span', { 'class': 'mdl-switch__focus-helper' })
  			)
  		);
  	};

  	return Switch;
  }(MaterialComponent);

  var Table = function (_MaterialComponent51) {
  	inherits(Table, _MaterialComponent51);

  	function Table() {
  		var _temp50, _this52, _ret50;

  		classCallCheck(this, Table);

  		for (var _len51 = arguments.length, args = Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
  			args[_key51] = arguments[_key51];
  		}

  		return _ret50 = (_temp50 = (_this52 = possibleConstructorReturn(this, _MaterialComponent51.call.apply(_MaterialComponent51, [this].concat(args))), _this52), _this52.component = 'data-table', _this52.nodeName = 'table', _this52.js = true, _temp50), possibleConstructorReturn(_this52, _ret50);
  	}

  	return Table;
  }(MaterialComponent);

  var TableCell = function (_MaterialComponent52) {
  	inherits(TableCell, _MaterialComponent52);

  	function TableCell() {
  		var _temp51, _this53, _ret51;

  		classCallCheck(this, TableCell);

  		for (var _len52 = arguments.length, args = Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
  			args[_key52] = arguments[_key52];
  		}

  		return _ret51 = (_temp51 = (_this53 = possibleConstructorReturn(this, _MaterialComponent52.call.apply(_MaterialComponent52, [this].concat(args))), _this53), _this53.component = 'data-table__cell', _this53.nodeName = 'td', _temp51), possibleConstructorReturn(_this53, _ret51);
  	}

  	return TableCell;
  }(MaterialComponent);

  Table.Cell = TableCell;

  var List = function (_MaterialComponent53) {
  	inherits(List, _MaterialComponent53);

  	function List() {
  		var _temp52, _this54, _ret52;

  		classCallCheck(this, List);

  		for (var _len53 = arguments.length, args = Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
  			args[_key53] = arguments[_key53];
  		}

  		return _ret52 = (_temp52 = (_this54 = possibleConstructorReturn(this, _MaterialComponent53.call.apply(_MaterialComponent53, [this].concat(args))), _this54), _this54.component = 'list', _this54.nodeName = 'ul', _temp52), possibleConstructorReturn(_this54, _ret52);
  	}

  	return List;
  }(MaterialComponent);

  var ListItem = function (_MaterialComponent54) {
  	inherits(ListItem, _MaterialComponent54);

  	function ListItem() {
  		var _temp53, _this55, _ret53;

  		classCallCheck(this, ListItem);

  		for (var _len54 = arguments.length, args = Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
  			args[_key54] = arguments[_key54];
  		}

  		return _ret53 = (_temp53 = (_this55 = possibleConstructorReturn(this, _MaterialComponent54.call.apply(_MaterialComponent54, [this].concat(args))), _this55), _this55.component = 'list__item', _this55.nodeName = 'li', _temp53), possibleConstructorReturn(_this55, _ret53);
  	}

  	return ListItem;
  }(MaterialComponent);

  List.Item = ListItem;

  var TextField = function (_MaterialComponent55) {
  	inherits(TextField, _MaterialComponent55);

  	function TextField() {
  		classCallCheck(this, TextField);

  		for (var _len55 = arguments.length, args = Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
  			args[_key55] = arguments[_key55];
  		}

  		var _this56 = possibleConstructorReturn(this, _MaterialComponent55.call.apply(_MaterialComponent55, [this].concat(args)));

  		_this56.component = 'textfield';
  		_this56.js = true;

  		_this56.id = uid();
  		return _this56;
  	}

  	TextField.prototype.componentDidUpdate = function componentDidUpdate() {
  		var input = this.base && this.base.querySelector && this.base.querySelector('input,textarea');
  		if (input && input.value && input.value !== this.props.value) {
  			input.value = this.props.value;
  		}
  		if (input && input.setCustomValidity) {
  			input.setCustomValidity(this.props.errorMessage || "");
  		}
  	};

  	TextField.prototype.mdlRender = function mdlRender() {
  		var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  		var id = props.id || this.id,
  		    errorMessage = props.errorMessage,
  		    p = extend({}, props);

  		delete p.class;
  		delete p.errorMessage;

  		var field = preact.h(
  			'div',
  			null,
  			preact.h('input', _extends({ type: 'text', 'class': 'mdl-textfield__input', id: id, value: '' }, p)),
  			preact.h(
  				'label',
  				{ 'class': 'mdl-textfield__label', 'for': id },
  				props.label || props.children
  			),
  			errorMessage ? preact.h(
  				'span',
  				{ 'class': 'mdl-textfield__error' },
  				errorMessage
  			) : null
  		);
  		if (props.multiline) {
  			field.children[0].nodeName = 'textarea';
  		}
  		if (props.expandable === true) {
  			(field.attributes = field.attributes || {}).class = 'mdl-textfield__expandable-holder';
  			field = preact.h(
  				'div',
  				null,
  				preact.h(
  					'label',
  					{ 'class': 'mdl-button mdl-js-button mdl-button--icon', 'for': id },
  					preact.h(
  						'i',
  						{ 'class': 'material-icons' },
  						props.icon
  					)
  				),
  				field
  			);
  		}
  		var cl = getClass(props);
  		if (cl) {
  			(field.attributes = field.attributes || {}).class = cl;
  		}

  		return field;
  	};

  	return TextField;
  }(MaterialComponent);

  var Tooltip = function (_MaterialComponent56) {
  	inherits(Tooltip, _MaterialComponent56);

  	function Tooltip() {
  		var _temp54, _this57, _ret54;

  		classCallCheck(this, Tooltip);

  		for (var _len56 = arguments.length, args = Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
  			args[_key56] = arguments[_key56];
  		}

  		return _ret54 = (_temp54 = (_this57 = possibleConstructorReturn(this, _MaterialComponent56.call.apply(_MaterialComponent56, [this].concat(args))), _this57), _this57.component = 'tooltip', _temp54), possibleConstructorReturn(_this57, _ret54);
  	}

  	return Tooltip;
  }(MaterialComponent);

  var index = {
  	options: options,
  	Icon: Icon,
  	Button: Button,
  	Card: Card,
  	Dialog: Dialog,
  	Layout: Layout,
  	Navigation: Navigation,
  	Tabs: Tabs,
  	MegaFooter: MegaFooter,
  	MiniFooter: MiniFooter,
  	Grid: Grid,
  	Cell: Cell,
  	Progress: Progress,
  	Spinner: Spinner,
  	Menu: Menu,
  	Slider: Slider,
  	Snackbar: Snackbar,
  	CheckBox: CheckBox,
  	Radio: Radio,
  	IconToggle: IconToggle,
  	Switch: Switch,
  	Table: Table,
  	TextField: TextField,
  	Tooltip: Tooltip,
  	List: List,
  	ListItem: ListItem
  };

  exports.options = options;
  exports.MaterialComponent = MaterialComponent;
  exports.Icon = Icon;
  exports.Button = Button;
  exports.Card = Card;
  exports.CardTitle = CardTitle;
  exports.CardTitleText = CardTitleText;
  exports.CardMedia = CardMedia;
  exports.CardText = CardText;
  exports.CardActions = CardActions;
  exports.CardMenu = CardMenu;
  exports.Dialog = Dialog;
  exports.DialogTitle = DialogTitle;
  exports.DialogContent = DialogContent;
  exports.DialogActions = DialogActions;
  exports.Layout = Layout;
  exports.LayoutHeader = LayoutHeader;
  exports.LayoutHeaderRow = LayoutHeaderRow;
  exports.LayoutTitle = LayoutTitle;
  exports.LayoutSpacer = LayoutSpacer;
  exports.LayoutDrawer = LayoutDrawer;
  exports.LayoutContent = LayoutContent;
  exports.LayoutTabBar = LayoutTabBar;
  exports.LayoutTab = LayoutTab;
  exports.LayoutTabPanel = LayoutTabPanel;
  exports.Navigation = Navigation;
  exports.NavigationLink = NavigationLink;
  exports.Tabs = Tabs;
  exports.TabBar = TabBar;
  exports.Tab = Tab;
  exports.TabPanel = TabPanel;
  exports.MegaFooter = MegaFooter;
  exports.MegaFooterMiddleSection = MegaFooterMiddleSection;
  exports.MegaFooterDropDownSection = MegaFooterDropDownSection;
  exports.MegaFooterHeading = MegaFooterHeading;
  exports.MegaFooterLinkList = MegaFooterLinkList;
  exports.MegaFooterBottomSection = MegaFooterBottomSection;
  exports.MiniFooter = MiniFooter;
  exports.MiniFooterLeftSection = MiniFooterLeftSection;
  exports.MiniFooterLinkList = MiniFooterLinkList;
  exports.Grid = Grid;
  exports.Cell = Cell;
  exports.Progress = Progress;
  exports.Spinner = Spinner;
  exports.Menu = Menu;
  exports.MenuItem = MenuItem;
  exports.Slider = Slider;
  exports.Snackbar = Snackbar;
  exports.CheckBox = CheckBox;
  exports.Radio = Radio;
  exports.IconToggle = IconToggle;
  exports.Switch = Switch;
  exports.Table = Table;
  exports.TableCell = TableCell;
  exports.List = List;
  exports.ListItem = ListItem;
  exports.TextField = TextField;
  exports.Tooltip = Tooltip;
  exports['default'] = index;

}));

});

export default preactMdl;
