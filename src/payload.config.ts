import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Projects } from './collections/Projects'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Projects],
  editor: lexicalEditor({}),
  secret: '139b109a01923be1eedc1395',
  db: postgresAdapter({
    connectionString: 'postgresql://neondb_owner:npg_6GnCExto2AIp@ep-fragrant-mountain-b60tvra4-pooler.c-2.sa-east-1.aws.neon.tech/neondb?sslmode=require',
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
