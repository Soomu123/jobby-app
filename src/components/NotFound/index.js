import './index.css'

const notFoundImage =
  'https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'

const NotFound = () => (
  <>
    <div className="not-found-container">
      <img className="not-found-image" src={notFoundImage} alt="not found" />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-paragraph">
        we`&apos;`re sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
