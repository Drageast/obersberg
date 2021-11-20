// Luca 100%
import MediaQuery from 'react-responsive'

const DeviceContentManager = (props: { DesktopElement: any; MobileElement?: any; }) => {
    return (
        <>
            <MediaQuery minWidth={1224}>
                <props.DesktopElement/>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                {props.MobileElement? <props.MobileElement/>: <props.DesktopElement/>}
            </MediaQuery>
        </>
    );
};

export { DeviceContentManager };