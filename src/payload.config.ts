import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Projects } from './collections/Projects'
import { Media } from './collections/Media' // Importação que faltava para destravar a tela branca

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- Cristiano Gatte Portfolio',
    },
  },
  collections: [Users, Projects, Media],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '139b109a01923be1eedc1395',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://neondb_owner:npg_6GnCExto2AIp@ep-fragrant-mountain-b60tvra4-pooler.c-2.sa-east-1.aws.neon.tech/neondb?sslmode=require',
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
