import Container from './Container';
import Heading from './Heading';
import Paragraph from './Paragraph';
import styles from './locationPicker.module.scss';

const LocationPicker = () => {
    return <section className={styles.locationPicker}>
        <Container>
            <Heading level={2}>
                Loc
            </Heading>
            <Paragraph>
                This is a description of the car.
            </Paragraph>
        </Container>
    </section>
}
export default LocationPicker;