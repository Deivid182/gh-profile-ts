import {render, RenderOptions} from '@testing-library/react'
import { UserGHProvider } from './context/user-gh'
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: UserGHProvider, ...options})


// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
export {customRender as render}