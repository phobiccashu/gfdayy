-- PostgreSQL Database Schema Setup

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    secret_passcode_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE open_when_notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    mood_category VARCHAR(50) NOT NULL,
    note_body TEXT NOT NULL,
    unlock_timestamp TIMESTAMP WITH TIME ZONE,
    image_url TEXT,
    is_locked BOOLEAN DEFAULT FALSE
);

CREATE TABLE love_notes_52 (
    id SERIAL PRIMARY KEY,
    card_number INT UNIQUE NOT NULL,
    love_reason TEXT NOT NULL
);

CREATE TABLE bucket_list_items (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    title VARCHAR(200) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    claimed_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE soundtrack (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    note_from_bf TEXT,
    spotify_embed_url TEXT
);

CREATE TABLE timeline_events (
    id SERIAL PRIMARY KEY,
    milestone_title VARCHAR(150) NOT NULL,
    event_date DATE NOT NULL,
    description TEXT NOT NULL,
    photo_url TEXT
);

CREATE TABLE date_generator_ideas (
    id SERIAL PRIMARY KEY,
    activity_type VARCHAR(50) NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL
);

-- Initial Mock Data Inserts
INSERT INTO users (name, secret_passcode_hash) 
VALUES ('My Love', 'paris');

INSERT INTO open_when_notes (title, mood_category, note_body, unlock_timestamp, image_url, is_locked) VALUES
('Open when you miss me', 'longing', 'Remember that distance is temporary. Close your eyes, listen to our playlist, and know I am thinking of you right now.', NULL, 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600', FALSE),
('Open when you can''t sleep', 'night', 'Count all the reasons I love you instead of sheep. Here is a reminder: You are my dream come true. Now take a deep breath and rest.', NULL, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600', FALSE),
('Open when you''re stressed', 'comfort', 'Take a deep breath in... and out. Whatever is overwhelming you right now won''t last forever, but my support for you will.', NULL, 'https://images.unsplash.com/photo-1499209974431-9dac3ada00d7?w=600', FALSE),
('Open on your next Birthday', 'special', 'Happy Birthday my beautiful girl! This envelope is time-locked for your special day!', '2027-01-01 00:00:00+00', 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600', TRUE);

INSERT INTO love_notes_52 (card_number, love_reason) VALUES
(1, 'The way your eyes crinkle when you laugh deeply.'),
(2, 'How thoughtful you are with everyone around you.'),
(3, 'Your infectious enthusiasm when you talk about things you love.'),
(4, 'The warm feeling I get every time you hold my hand.');

INSERT INTO bucket_list_items (category, title, is_completed) VALUES
('Cozy Nights In', 'Build a massive blanket fort and movie marathon', FALSE),
('Travel Adventures', 'Watch the sunrise together at the beach', FALSE),
('Foodie Dates', 'Bake homemade pasta from scratch', FALSE),
('Cheap & Silly', 'Go to a thrift store with $10 and pick outfits for each other', FALSE);

INSERT INTO soundtrack (title, artist, note_from_bf, spotify_embed_url) VALUES
('Lover', 'Taylor Swift', 'Reminds me of our first road trip together.', 'https://open.spotify.com/embed/track/1r9xUipOio42A3P3bdNC3B'),
('Perfect', 'Ed Sheeran', 'Because every time I dance with you, this song plays in my head.', 'https://open.spotify.com/embed/track/0tw2oO6o4mIn9A619T2v43');

INSERT INTO timeline_events (milestone_title, event_date, description, photo_url) VALUES
('Our First Date', '2023-02-14', 'We talked for hours at the coffee shop until they had to close!', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600'),
('Our First Vacation', '2023-07-20', 'Unforgettable days soaking in the sun and exploring new streets.', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600');

INSERT INTO date_generator_ideas (activity_type, title, description) VALUES
('Cozy', 'Late Night Ice Cream Run', 'Hop in the car in pajamas and grab midnight dessert!'),
('Adventure', 'Stargazing Picnic', 'Pack snacks, grab a heavy blanket, and drive away from city lights.'),
('Foodie', 'DIY Pizza Championship', 'We both make custom pizzas and judge whose reigns supreme!');