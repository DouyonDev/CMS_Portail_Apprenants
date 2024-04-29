<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'kalanso' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$LD)om33LH@.mcDZvn^_G|~U[$eJ(yWRl*ZI7Bd$SZ;<|x:}@pqX#QjMli4n[%/x' );
define( 'SECURE_AUTH_KEY',  'Xp2N!vAZ55cTJ`}l%LO1>mIV3PO]24h!MFx}by5_X]fA<*{sD8+25QGw]^(^@LRG' );
define( 'LOGGED_IN_KEY',    'V-Tw6o?Y<&c3Fuwk)9>e;3|k9y!2xk4yUL7_xXkuc6a&0g5G T#>[NA{QX|q$B=i' );
define( 'NONCE_KEY',        'V]=E[[qUZ}GrDEXRrk-08dS/X3cH]#GY8F1D[!JeUv}3%G4X L5@06W4JI/f5]Ew' );
define( 'AUTH_SALT',        'PB]T6]:A (XrPIB/s3G$E;R8y,u?LInH?2kj>fZ:}s[;j:vM<,4MvY|xe*.@w%SU' );
define( 'SECURE_AUTH_SALT', '8:?PE(ghk6D:#1-CiF/jiov!6E|m4%SfMRL*XQVe@)G%K0olR(p|81Wja! ofbOC' );
define( 'LOGGED_IN_SALT',   'Vc%KyE2-NSE=~HIf({H:+9oP:R$iyijUA:jOP)S:_@NUn2ZYWE~bfjP81L]-.%8v' );
define( 'NONCE_SALT',       'O8fqT_?GMw@9q_:jIh7oPo%PP}ppB>l3csPL[jVgsmZ@oO(Lpfs~YnM*uEW~6P!:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
