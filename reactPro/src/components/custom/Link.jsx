import React from 'react';
import PropTypes from 'prop-types';

/** ** Texto con con dirección URL */
const Link = ({ container, color, className, label, href }) => {
  return (
    <div className={container}>
      <a
        href={href}
        className={`text-decoration-none fw-bold link-${color} ${className}`}
      >
        {label}
      </a>
    </div>
  )
}

export default Link;

Link.propTypes = {
  /** ** Texto a mostrar en el enlace URL */
  label: PropTypes.string,
  /** ** Url de la ruta a navegar */
  href: PropTypes.string,
  /** ** Clase de bootstrap que recibe el color de fondo */
  color: PropTypes.oneOf(["dark", "danger", "info", "primary", "secondary", "warning"]),
  /** ** Añade clase personalizada al elemento */
  className: PropTypes.string,
}

Link.defaultProps = {
  label: "",
  href: '#!',
  color: 'dark',
  className: ""
}