import { ReactNode } from "react"

const PrivateLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <h1>Private Layout</h1>
        {children}
    </div>
  )
}

export default PrivateLayout