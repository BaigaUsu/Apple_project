import clsx from 'clsx';
import classes from './Button.module.scss';

export function Button({
    text,
    children,
    ...props
}) {
    return (
        <div className={classes.Button} {...props}>
            {children}
            {text}
        </div>
    );
}

