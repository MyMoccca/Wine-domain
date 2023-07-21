/* eslint no-use-before-define: 0 */

-- Active: 1675088471994@@127.0.0.1@3306@blog_backoffice

DROP TABLE IF EXISTS article_to_tags;

DROP TABLE IF EXISTS article;

DROP TABLE IF EXISTS product;

DROP TABLE IF EXISTS tags;

DROP TABLE IF EXISTS images;

DROP TABLE IF EXISTS wineimages;

DROP TABLE IF EXISTS users;

CREATE TABLE
    users (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        email VARCHAR(255) UNIQUE,
        encrypt_pwd VARCHAR(255)
    );

INSERT INTO
    users(email, encrypt_pwd)
VALUES (
        'admin@admin.fr',
        '$argon2id$v=19$m=65536,t=3,p=1$Ko4xdezcV74LV5pNp5vg0Q$vd5gmP2b/pdRYqbhckOoSi35KgQNzTF2Hi5eiz03zM8'
    );

CREATE TABLE
    images (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        src VARCHAR(255),
        alt VARCHAR(255)
    );

INSERT INTO images(src, alt)
VALUES (
        'Vendages_2022.jpg',
        'Lorem Ipsum'
    );

INSERT INTO images(src, alt) VALUES ('photo13.jpg', 'Lorem Ipsum');

INSERT INTO images(src, alt) VALUES ('photo15.jpg', 'Lorem Ipsum');

INSERT INTO images(src, alt) VALUES ('photo17.jpg', 'Lorem Ipsum');

INSERT INTO images(src, alt) VALUES ('photo18.jpg', 'Lorem Ipsum');

INSERT INTO images(src, alt) VALUES ('photo22.jpg', 'Lorem Ipsum');

CREATE TABLE
    tags (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        label VARCHAR(100)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO tags(label)
VALUES ("vendanges 2022"), ("hiver"), ("taille"), ("traitement"), ("vendanges 2021"), ("vendanges 2020"), ("mise en bouteuille");

CREATE TABLE
    article (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        subtitle VARCHAR(255) NOT NULL,
        resume LONGTEXT NOT NULL,
        text LONGTEXT NOT NULL,
        image_id INT NOT NULL,
        CONSTRAINT image_id_FK FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    article(
        id,
        title,
        subtitle,
        resume,
        text,
        image_id
    )
VALUES (
        1,
        'Titre article 1',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae corrupti enim at neque sed, corporis eos vel dolores libero! Molestiae minus pariatur sunt sapiente magni asperiores quod, culpa magnam. Ea in deleniti iure quae quos neque. Officia harum quae esse asperiores, reiciendis assumenda optio doloremque non quod voluptatem hic! Corrupti, molestiae placeat neque nisi enim commodi pariatur modi ea. Temporibus, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        1
    );

INSERT INTO
    article(
        id,
        title,
        subtitle,
        resume,
        text,
        image_id
    )
VALUES (
        2,
        'Titre article 2',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae corrupti enim at neque sed, corporis eos vel dolores libero! Molestiae minus pariatur sunt sapiente magni asperiores quod, culpa magnam. Ea in deleniti iure quae quos neque. Officia harum quae esse asperiores, reiciendis assumenda optio doloremque non quod voluptatem hic! Corrupti, molestiae placeat neque nisi enim commodi pariatur modi ea. Temporibus, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        2
    );

INSERT INTO
    article(
        id,
        title,
        subtitle,
        resume,
        text,
        image_id
    )
VALUES (
        3,
        'Titre article 3',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae corrupti enim at neque sed, corporis eos vel dolores libero! Molestiae minus pariatur sunt sapiente magni asperiores quod, culpa magnam. Ea in deleniti iure quae quos neque. Officia harum quae esse asperiores, reiciendis assumenda optio doloremque non quod voluptatem hic! Corrupti, molestiae placeat neque nisi enim commodi pariatur modi ea. Temporibus, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        3
    );

INSERT INTO
    article(
        id,
        title,
        subtitle,
        resume,
        text,
        image_id
    )
VALUES (
        4,
        'Titre article 4',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae corrupti enim at neque sed, corporis eos vel dolores libero! Molestiae minus pariatur sunt sapiente magni asperiores quod, culpa magnam. Ea in deleniti iure quae quos neque. Officia harum quae esse asperiores, reiciendis assumenda optio doloremque non quod voluptatem hic! Corrupti, molestiae placeat neque nisi enim commodi pariatur modi ea. Temporibus, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        4
    );

INSERT INTO
    article(
        id,
        title,
        subtitle,
        resume,
        text,
        image_id
    )
VALUES (
        5,
        'Titre article 5',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae corrupti enim at neque sed, corporis eos vel dolores libero! Molestiae minus pariatur sunt sapiente magni asperiores quod, culpa magnam. Ea in deleniti iure quae quos neque. Officia harum quae esse asperiores, reiciendis assumenda optio doloremque non quod voluptatem hic! Corrupti, molestiae placeat neque nisi enim commodi pariatur modi ea. Temporibus, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        5
    );

INSERT INTO
    article(
        title,
        subtitle,
        resume,
        text,
        image_id
    )
VALUES (
        'Titre article 6',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia ilENGINE = InnoDB DEFAULT CHARSET = utf8;, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        6
    );

CREATE TABLE
    article_to_tags (
        id int UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        article_id int NOT NULL,
        CONSTRAINT article_id_FK Foreign Key (article_id) REFERENCES article(id),
        tags_id int NOT NULL,
        CONSTRAINT tags_id_fk Foreign Key (tags_id) REFERENCES tags(id)
    );

INSERT INTO
    article_to_tags(article_id, tags_id)
VALUES (1, 1), (1, 2), (1, 4), (1, 5), (2, 1), (2, 2), (2, 4), (2, 5), (3, 1), (3, 3), (3, 4), (3, 6), (4, 1), (4, 3), (4, 4), (4, 7), (5, 1), (5, 3), (5, 4), (5, 7), (6, 1), (6, 3), (6, 4), (6, 7);

CREATE TABLE
    wineimages (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        src VARCHAR(255),
        alt VARCHAR(255)
    );

INSERT INTO
    wineimages(src, alt)
VALUES (
        'Impulsif-rose-2022.png',
        'Impulsif rosé 2022'
    );

INSERT INTO
    wineimages(src, alt)
VALUES (
        'Impulsif-rose-2022.png',
        'Impulsif rosé 2022'
    );

INSERT INTO
    wineimages(src, alt)
VALUES (
        'Impulsif-rose-2022.png',
        'Impulsif rosé 2022'
    );

INSERT INTO
    wineimages(src, alt)
VALUES (
        'puPartage-2022.png',
        'Impulsif rosé 2022'
    );

INSERT INTO
    wineimages(src, alt)
VALUES (
        'Couvee-2guys-2022.png',
        'Impulsif rosé 2022'
    );

INSERT INTO
    wineimages(src, alt)
VALUES (
        'Partage-2022.png',
        'Impulsif rosé 2022'
    );

CREATE TABLE
    product (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        winename VARCHAR(255) NOT NULL,
        year VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        variety VARCHAR(255) NOT NULL,
        details varchar (255) NOT NULL,
        price varchar (255) NOT NULL,
        wineimage_id INT NOT NULL,
        CONSTRAINT wineimage_id_FK FOREIGN KEY (wineimage_id) REFERENCES images(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    product(
        id,
        winename,
        year,
        type,
        variety,
        details,
        price,
        wineimage_id
    )
VALUES (
        1,
        'Impulsif',
        '2022',
        'Rosé',
        '30 % Carigan blanc, 70 % Carignan rouge ',
        'wine description',
        '8,00 €',
        1
    );

INSERT INTO
    product(
        id,
        winename,
        year,
        type,
        variety,
        details,
        price,
        wineimage_id
    )
VALUES (
        2,
        'Impulsif',
        '2022',
        'Blanc',
        '100 % Carigan blanc ',
        'wine description',
        '8,00 €',
        2
    );

INSERT INTO
    product(
        id,
        winename,
        year,
        type,
        variety,
        details,
        price,
        wineimage_id
    )
VALUES (
        3,
        'Impulsif',
        '2022',
        'Rouge',
        '33 % Carigan rouge, 33 % Grenache rouge, 33 % Syrah, ',
        'wine description',
        '8,00 €',
        3
    );

INSERT INTO
    product(
        id,
        winename,
        year,
        type,
        variety,
        details,
        price,
        wineimage_id
    )
VALUES (
        4,
        'Partage',
        '2022',
        'Rouge',
        '30 % Carigan rouge, 30 % Grenache rouge, 40 % Syrah ',
        'wine description',
        '10,00 €',
        4
    );

INSERT INTO
    product(
        id,
        winename,
        year,
        type,
        variety,
        details,
        price,
        wineimage_id
    )
VALUES (
        5,
        'Cuvée 2 Guy',
        '2022',
        'Rouge',
        '80 % Carigan rouge, 20 % Grenache rouge ',
        'wine description',
        '13,50 €',
        5
    );

INSERT INTO
    product(
        id,
        winename,
        year,
        type,
        variety,
        details,
        price,
        wineimage_id
    )
VALUES (
        6,
        'Authentique',
        '2022',
        'Rouge',
        '80 % Carigan rouge, 20 % Syrah ',
        'wine description',
        '25,00 €',
        6
    );