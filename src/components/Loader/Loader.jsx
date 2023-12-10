import { Circles } from  'react-loader-spinner'

const Loader = () => {
  return (
      <Circles
        height="150"
        width="150"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperClass="loading"
        visible={true}
      />
  )
}

export default Loader