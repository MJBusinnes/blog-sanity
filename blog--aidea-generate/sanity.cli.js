import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'umn1lf84',
    dataset: 'production',
  },
  project: {
    basePath: '/dashboard'
  }
})
