import express, { Request, Response } from 'express'

const bootstrap = () => {
  const app = express()

  app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hey!' })
  })

  const PORT = process.env.PORT || 3001

  app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
  })
}

bootstrap()
