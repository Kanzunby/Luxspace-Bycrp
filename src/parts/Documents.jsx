import useModalDOM from "../helpers/hooks/useModalDOM";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useScrollTop from "../helpers/hooks/useScrollToTop";

export default function Documents({ children }) {
  useModalDOM();
  useScrollAnchor();
  useScrollTop();
  return children;
}
