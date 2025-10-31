import Image from 'next/image';
import NextLink from './NextLink';
import PropTypes from 'prop-types';
import { FaGlobe, FaCube, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const ServiceCard = ({ title, src, description, icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'FaGlobe':
        return <FaGlobe size={100} className="text-yellow" />;
      case 'FaCube':
        return <FaCube size={100} className="text-yellow" />;
      case 'FaShieldAlt':
        return <FaShieldAlt size={100} className="text-yellow" />;
      case 'FaChartLine':
        return <FaChartLine size={100} className="text-yellow" />;
      default:
        return null;
    }
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <div className="card-body p-2">
          {src ? (
            <Image
              src={src}
              alt={`${title} | ENTrova`}
              width={100}
              height={100}
              className="position-static my-5"
            />
          ) : (
            <div className="my-5">
              {renderIcon()}
            </div>
          )}
          <h3>{title}</h3>
          <p className="px-5">{description}</p>
          <NextLink
            title="Learn More"
            href="#"
            className="btn btn-md text-dark btn-yellow rounded mb-5"
          />
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

ServiceCard.defaultProps = {
  title: 'Untitled Service',
  description: 'No description available.',
};

export default ServiceCard;
