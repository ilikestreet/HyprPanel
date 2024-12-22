import { Gtk } from 'astal/gtk3';
import AstalNotifd from 'gi://AstalNotifd?version=0.1';

export const SilentButton = ({ notification }: SilentButtonProps): JSX.Element => {
    return (
        <button
            className={'silent-notification-button'}
            onClick={() => {
                // const optionsJson = JSON.parse(Utils.readFile(OPTIONS) || '{}');
                // const tempIgnore = new Set(options.notifications.ignore.value);
                // tempIgnore.add(notification.app_name);
                // optionsJson['notifications.ignore'] = tempIgnore;
                // Utils.writeFileSync(JSON.stringify(optionsJson, null, 2), OPTIONS);

                notification.dismiss();
            }}
        >
            <label className={'txt-icon notification-silent'} label={''} halign={Gtk.Align.CENTER}></label>
        </button>
    );
};

interface SilentButtonProps {
    notification: AstalNotifd.Notification;
}
