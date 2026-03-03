import { useLocation, useNavigate, useParams } from 'react-router-dom';

/**
 * HOC that injects React Router's location, navigate, and params into a component.
 * Used by App (ScrollToTop) and routes (AnimatedRoutes) so they can react to route changes.
 */
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
