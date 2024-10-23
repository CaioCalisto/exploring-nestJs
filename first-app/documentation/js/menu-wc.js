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
                    <a href="index.html" data-type="index-link">first-app documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link" >ApiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-cb8cebb56f93d0b92fde53e7d713e0b0b39fac1a9e94c0d0c330d23ca712e2a66d6857d02c61e2aab1446642416ac74fbd1ee708b47b5e9cbda1c694193931a6"' : 'data-bs-target="#xs-controllers-links-module-AppModule-cb8cebb56f93d0b92fde53e7d713e0b0b39fac1a9e94c0d0c330d23ca712e2a66d6857d02c61e2aab1446642416ac74fbd1ee708b47b5e9cbda1c694193931a6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-cb8cebb56f93d0b92fde53e7d713e0b0b39fac1a9e94c0d0c330d23ca712e2a66d6857d02c61e2aab1446642416ac74fbd1ee708b47b5e9cbda1c694193931a6"' :
                                            'id="xs-controllers-links-module-AppModule-cb8cebb56f93d0b92fde53e7d713e0b0b39fac1a9e94c0d0c330d23ca712e2a66d6857d02c61e2aab1446642416ac74fbd1ee708b47b5e9cbda1c694193931a6"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/GaragesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GaragesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/HousesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HousesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-cb8cebb56f93d0b92fde53e7d713e0b0b39fac1a9e94c0d0c330d23ca712e2a66d6857d02c61e2aab1446642416ac74fbd1ee708b47b5e9cbda1c694193931a6"' : 'data-bs-target="#xs-injectables-links-module-AppModule-cb8cebb56f93d0b92fde53e7d713e0b0b39fac1a9e94c0d0c330d23ca712e2a66d6857d02c61e2aab1446642416ac74fbd1ee708b47b5e9cbda1c694193931a6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cb8cebb56f93d0b92fde53e7d713e0b0b39fac1a9e94c0d0c330d23ca712e2a66d6857d02c61e2aab1446642416ac74fbd1ee708b47b5e9cbda1c694193931a6"' :
                                        'id="xs-injectables-links-module-AppModule-cb8cebb56f93d0b92fde53e7d713e0b0b39fac1a9e94c0d0c330d23ca712e2a66d6857d02c61e2aab1446642416ac74fbd1ee708b47b5e9cbda1c694193931a6"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UseCaseModule.html" data-type="entity-link" >UseCaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UseCaseModule-a889a080a3baf6e270d05a0db8367ae1b737bf8e0932d89b2d8de4279f686b457c56315f6541236b61d64d20d3d6041df510591f77959addf41171a18247d39c"' : 'data-bs-target="#xs-injectables-links-module-UseCaseModule-a889a080a3baf6e270d05a0db8367ae1b737bf8e0932d89b2d8de4279f686b457c56315f6541236b61d64d20d3d6041df510591f77959addf41171a18247d39c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UseCaseModule-a889a080a3baf6e270d05a0db8367ae1b737bf8e0932d89b2d8de4279f686b457c56315f6541236b61d64d20d3d6041df510591f77959addf41171a18247d39c"' :
                                        'id="xs-injectables-links-module-UseCaseModule-a889a080a3baf6e270d05a0db8367ae1b737bf8e0932d89b2d8de4279f686b457c56315f6541236b61d64d20d3d6041df510591f77959addf41171a18247d39c"' }>
                                        <li class="link">
                                            <a href="injectables/GarageUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GarageUseCase</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});