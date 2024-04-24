import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Carta do secretariado',
    Svg: require('@site/static/img/logo_color.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis. Arcu ac tortor dignissim convallis. Sagittis purus sit amet volutpat consequat mauris. Molestie nunc non blandit massa enim nec. Arcu non sodales neque sodales. Ut etiam sit amet nisl purus in mollis nunc. Quam vulputate dignissim suspendisse in est. Diam ut venenatis tellus in metus. Faucibus pulvinar elementum integer enim neque volutpat. Adipiscing at in tellus integer.
Aliquam ultrices sagittis orci a scelerisque purus. Consequat nisl vel pretium lectus quam id. Ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Aliquam etiam erat velit scelerisque in dictum. Faucibus turpis in eu mi bibendum neque egestas congue. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Morbi tincidunt ornare massa eget. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Leo duis ut diam quam nulla. Euismod lacinia at quis risus sed vulputate odio. Varius vel pharetra vel turpis nunc eget lorem. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Eget mi proin sed libero enim sed faucibus. Ut faucibus pulvinar elementum integer enim. Consequat semper viverra nam libero justo.
Ridiculus mus mauris vitae ultricies leo. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas sed. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. 
      </>
    ),
  },
  {
    title: 'Carta do secretariado',
    Svg: require('@site/static/img/logo_color.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis. Arcu ac tortor dignissim convallis. Sagittis purus sit amet volutpat consequat mauris. Molestie nunc non blandit massa enim nec. Arcu non sodales neque sodales. Ut etiam sit amet nisl purus in mollis nunc. Quam vulputate dignissim suspendisse in est. Diam ut venenatis tellus in metus. Faucibus pulvinar elementum integer enim neque volutpat. Adipiscing at in tellus integer.
Aliquam ultrices sagittis orci a scelerisque purus. Consequat nisl vel pretium lectus quam id. Ullamcorper malesuada proin libero nunc consequat interdum varius. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Aliquam etiam erat velit scelerisque in dictum. Faucibus turpis in eu mi bibendum neque egestas congue. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Morbi tincidunt ornare massa eget. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Leo duis ut diam quam nulla. Euismod lacinia at quis risus sed vulputate odio. Varius vel pharetra vel turpis nunc eget lorem. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Eget mi proin sed libero enim sed faucibus. Ut faucibus pulvinar elementum integer enim. Consequat semper viverra nam libero justo.
Ridiculus mus mauris vitae ultricies leo. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas sed. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
    
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
