/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Page, View, Image, Document, StyleSheet } from '@react-pdf/renderer';
import logo from '../../../assets/logo-book.png'
import { Text } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        padding: '30px'
    },
    section: {
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
        flexGrow: 1
    },
    iconSpan: {
        display: 'flex',
        marginLeft: 'auto',
        width: '40px',
        height: '40px',
        marginTop: '-40px',
        marginRight: '-33px'
    },
    logo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100px',
        mixBlendMode: 'color-burn'
    },
    websitename: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '500',
        flexDirection: 'column'
    },
    divTitle: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 'auto',
        marginTop: 'auto'
    },
    title: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        marginBottom: '20px',
        color: 'black',
        textTransform: 'capitalize',
        fontWeight: '600',
        fontSize: '30px'
    },
    borderBottom: {
        borderBottom: '2px solid black',
    },
    borderTop: {
        borderTop: '2px solid black',
    },
    row: {
        display: 'flex',
        marginTop: '10px',
        marginRight: 0,
        marginLeft: 0,
        flexDirection: 'row',
        marginBottom: '150px'
    },
    col: {
        flexGrow: 1,
        FlexShrink: 0,
        FlexBasis: '0%',
        textTransform: 'capitalize',
        marginLeft: '50px'
    },
    italic: {
        fontStyle: 'italic'
    },
    pages: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey'
    }

});

// Create Document Component
export const MyDocument = ({ image, title, auther, publisher }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Image src={logo} width='100' style={styles.logo} />
            <Text style={styles.websitename}>
                Bookish Worm
            </Text >
            <div style={styles.divTitle}>
                <div style={styles.borderBottom}></div>
                <Text style={styles.title}>
                    {title}
                </Text>
                <div style={styles.borderTop}></div>
            </div>
            <div style={styles.row}>
                <div style={styles.col}>
                    <Text style={styles.italic}>
                        Auther:
                    </Text>
                    <h4>
                        <Text>
                            {auther}
                        </Text>
                    </h4>
                </div>
                <div style={styles.col}></div>
                <div style={styles.col}>
                    <Text style={styles.italic}>
                        Publisher:
                    </Text>
                    <h4>
                        <Text>
                            {publisher}
                        </Text>
                    </h4>
                </div>
            </div>
            <Text
                style={styles.pages}
                render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
            />
        </Page>
        {/* {
            image.map((img, i) => {
                return (
                    <Page size="A4" style={styles.page} key={i}>
                        <View style={styles.section}>
                            <Image src={img} />
                        </View>
                        <Text
                            style={styles.pages}
                            render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
                        />
                    </Page>
                )
            })
        } */}
        <Page size="A4" style={styles.page}>
            <Text>

            </Text>
        </Page>

    </Document >
);