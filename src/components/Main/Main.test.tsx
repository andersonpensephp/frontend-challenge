import { render, screen } from '@testing-library/react'

import Main from './Main'
describe('<Main />', () => {
  it('should...', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /Reactjs/i })
    ).toBeInTheDocument()
    //Utilizar snapshot somente quando você quer garantir uma estrutura no código
    expect(container.firstChild).toMatchSnapshot()
  })
})
