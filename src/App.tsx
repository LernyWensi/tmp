import {
    Text,
    Document,
    Page,
    StyleSheet,
    View,
    PDFViewer,
} from '@react-pdf/renderer';
import clsx from 'clsx';

const S = StyleSheet.create({
    page: {
        backgroundColor: '#ff0000',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

const PDF = (): React.ReactNode => {
    return (
        <Document pageMode='useThumbs' style={{ backgroundColor: 'blue' }}>
            <Page size='A4' style={S.page}>
                <View style={S.section}>
                    <Text>Sections #1</Text>
                </View>
            </Page>
        </Document>
    );
};

type Editor = { className?: string };

const Editor = ({ className = '' }: Editor): React.ReactNode => {
    return <div className={clsx(className)}>Hello world</div>;
};

const App = (): React.ReactNode => {
    return (
        <>
            <Editor className='shrink-0 basis-1/2' />
            <div className='shrink-0 basis-1/2 bg-blue-200'>
                <PDFViewer style={{ height: '100%', width: '100%' }}>
                    <PDF />
                </PDFViewer>
            </div>
        </>
    );
};

export { App };
