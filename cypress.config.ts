import { defineConfig } from 'cypress'
import webpack from '@cypress/webpack-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import webpackOptions from './webpack.config'


async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: webpackOptions(config),
    })
  )

  return config
}

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
})
