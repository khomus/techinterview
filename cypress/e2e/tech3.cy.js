
import {generateUserData } from "../../support/helpers/userHelper.js"

describe("Front Page", () => {

    let user = generateUserData()

    before( function() {
        cy.createAuthenticatedUser(user)
        cy.login(user.email,user.password)
        cy.visit('/');

    })
    
    it("[C40177] User/Guest/Admin is able to click on Donor from Donations section", () =>{

         //Check if User has access 

        cy.get('.ts-catalog-promo__logo').first().invoke('attr','href')
        .then(($getUrl) =>{ 
            cy.get('.ts-catalog-promo__logo').first().click()
            cy.get('#ts-stock-catalog').should('exist')
            cy.url().should('include', $getUrl )
            cy.visit('/user/logout')  
        })

        //Check if Admin has access 

        cy.loginAsAdmin()
        cy.reload()
        cy.get('.ts-catalog-promo__logo').first().invoke('attr','href')
        .then(($getUrl) =>{ 
            cy.get('.ts-catalog-promo__logo').first().click()
            cy.get('#ts-stock-catalog').should('exist')
            cy.url().should('include', $getUrl )
            cy.visit('/user/logout')  
        })

        //Check if Gueast has access 

        cy.get('.ts-catalog-promo__logo').first().invoke('attr','href')
        .then(($getUrl) =>{ 
            cy.get('.ts-catalog-promo__logo').first().click()
            cy.get('#ts-stock-catalog').should('exist')
            cy.url().should('include', $getUrl )
            cy.visit('/user/logout')  
        })  
    })

it("[C40178] User/Guest/Admin is able to click on Product from Most Popular Donations section", () => {
    //Check if User has access    
  
    cy.get('.ts-product-card').last().invoke('attr','href')
    .then(($getUrl) => { 
        cy.get('.ts-product-card').last().click()
        cy.get('.node-content-tab-menu__list').should('exist')
        cy.url().should('include', $getUrl)
        cy.visit('/user/logout')  
            
    })

   //Check if Admin has access  

    cy.loginAsAdmin()
    cy.reload()
    cy.get('.ts-product-card').last().invoke('attr','href')
    .then(($getUrl) => { 
        cy.get('.ts-product-card').last().click()
        cy.get('.node-content-tab-menu__list').should('exist')
        cy.url().should('include', $getUrl)
        cy.visit('/user/logout')  
        
    })

   //Check if Guest has access

    cy.get('.ts-product-card').last().invoke('attr','href')
    .then(($getUrl) => { 
        cy.get('.ts-product-card').last().click()
        cy.get('.node-content-tab-menu__list').should('exist')
        cy.url().should('include', $getUrl)
            
    })

 })

 it("[C40181] User/Guest/Admin is able to use social media icons", () => {
    //Check if User has access    
    cy.log('--- Starting [C40181] User is able to use social media icons ---') 
    cy.get('[class=list-no-style').children().eq(2).should('be.visible');
    cy.get('[class=list-no-style').children().eq(2).children().should('have.attr', 'href').then((href) => {
       cy.visit(href)
    });
    cy.go('back');
    cy.visit('/user/logout')  
            
    //Check if Admin has access  
    cy.loginAsAdmin()
    cy.reload()
    cy.log('--- Starting [C40181] Admin is able to use social media icons ---') 
    cy.get('[class=list-no-style').children().eq(2).should('be.visible');
    cy.get('[class=list-no-style').children().eq(2).children().should('have.attr', 'href').then((href) => {
       cy.visit(href)
    });
    cy.go('back');
    cy.visit('/user/logout') 
             
    //Check if Guest has access
    cy.log('--- Starting [C40181] Guest is able to use social media icons ---') 
    cy.get('[class=list-no-style').children().eq(2).should('be.visible');
    cy.get('[class=list-no-style').children().eq(2).children().should('have.attr', 'href').then((href) => {
       cy.visit(href)
    });
    cy.go('back');
})



})