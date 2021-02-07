'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-assignment documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3bc0eb40855cf7e1bf3aaf7d4dbe7651"' : 'data-target="#xs-components-links-module-AppModule-3bc0eb40855cf7e1bf3aaf7d4dbe7651"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3bc0eb40855cf7e1bf3aaf7d4dbe7651"' :
                                            'id="xs-components-links-module-AppModule-3bc0eb40855cf7e1bf3aaf7d4dbe7651"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-2202cc2b2d31b892b66fa78f76e1fe42"' : 'data-target="#xs-injectables-links-module-CoreModule-2202cc2b2d31b892b66fa78f76e1fe42"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-2202cc2b2d31b892b66fa78f76e1fe42"' :
                                        'id="xs-injectables-links-module-CoreModule-2202cc2b2d31b892b66fa78f76e1fe42"' }>
                                        <li class="link">
                                            <a href="injectables/ApiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link">LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-e056b6a5f58c302c6c9f10ed1e6f4be3"' : 'data-target="#xs-components-links-module-LayoutModule-e056b6a5f58c302c6c9f10ed1e6f4be3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-e056b6a5f58c302c6c9f10ed1e6f4be3"' :
                                            'id="xs-components-links-module-LayoutModule-e056b6a5f58c302c6c9f10ed1e6f4be3"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainDashboardModule.html" data-type="entity-link">MainDashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainDashboardModule-3154804e8b22baa35f9ddc82f7ca757c"' : 'data-target="#xs-components-links-module-MainDashboardModule-3154804e8b22baa35f9ddc82f7ca757c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainDashboardModule-3154804e8b22baa35f9ddc82f7ca757c"' :
                                            'id="xs-components-links-module-MainDashboardModule-3154804e8b22baa35f9ddc82f7ca757c"' }>
                                            <li class="link">
                                                <a href="components/HomeSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MainDashboardModule-3154804e8b22baa35f9ddc82f7ca757c"' : 'data-target="#xs-injectables-links-module-MainDashboardModule-3154804e8b22baa35f9ddc82f7ca757c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MainDashboardModule-3154804e8b22baa35f9ddc82f7ca757c"' :
                                        'id="xs-injectables-links-module-MainDashboardModule-3154804e8b22baa35f9ddc82f7ca757c"' }>
                                        <li class="link">
                                            <a href="injectables/ArtistService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ArtistService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainDashboardRoutingModule.html" data-type="entity-link">MainDashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-a72bfc4595f08cfdbed767e3daa466ec"' : 'data-target="#xs-components-links-module-SharedModule-a72bfc4595f08cfdbed767e3daa466ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-a72bfc4595f08cfdbed767e3daa466ec"' :
                                            'id="xs-components-links-module-SharedModule-a72bfc4595f08cfdbed767e3daa466ec"' }>
                                            <li class="link">
                                                <a href="components/ArtistCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link">ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArtistService.html" data-type="entity-link">ArtistService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IArtists.html" data-type="entity-link">IArtists</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEvents.html" data-type="entity-link">IEvents</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});