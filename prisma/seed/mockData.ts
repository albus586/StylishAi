import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('86c23e47-1bdb-4a96-9fcf-1a60052d459c', '1Dorcas81@gmail.com', 'John Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv12345', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('05f2504a-7fde-4163-898f-4e48943cce3f', '8Quentin70@hotmail.com', 'Alice Wonderland', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv78901', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('9692a26e-7791-4224-bb1f-7ab8a08ec517', '22Addie_Cole33@yahoo.com', 'Alice Wonderland', 'https://i.imgur.com/YfJQV5z.png?id=24', 'inv67890', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('86347334-38d7-4c6d-9b54-ff3d2a5c1624', '29Mariana76@gmail.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv12345', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('322ea318-ad64-4a48-a935-2c8280e6d45b', '36Carmen_Cole@yahoo.com', 'Bob Builder', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv67890', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('34b21d74-792e-4498-8e3f-d265d5dd4c65', '43Ellen.Fay@hotmail.com', 'Alice Wonderland', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv12345', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('813a4de1-5f0f-4a30-a73a-db45cb6c845b', '50Della_Kohler@hotmail.com', 'Alice Wonderland', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv44556', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('9a2c186f-23e9-4d0b-a625-ccdb6bf41d7f', '57Shany95@gmail.com', 'Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv11223', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('d4425cfd-03bc-4a36-ac6d-8a45f3440223', '64Sigrid32@gmail.com', 'John Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv78901', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('16e5fd56-efa5-4d4f-a829-50d95b8fe5c4', 'a1b2c3d4e5f6g7h8i9j0', '{"sollicito":"crustulum","pax":"esse","velit":"uter"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('490d87d2-ac8d-476c-9994-d3d5f047fbcd', 'm1n2b3v4c5x6z7a8s9d0', '{"supellex":"administratio","molestias":"umbra","sum":"velut","triumphus":"angustus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('75a74fa5-07d8-46be-8c9d-29d9c5fca82c', 'z9y8x7w6v5u4t3s2r1q0', '{"crustulum":"crapula","turbo":"nemo","stella":"beatus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('89319a16-1d06-4068-a81f-4ce1ec23647b', 'z9y8x7w6v5u4t3s2r1q0', '{"amoveo":"vigilo","vigor":"undique","verus":"cariosus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('0d328a1e-b704-44eb-831c-ae4ff39c38ba', 'a1b2c3d4e5f6g7h8i9j0', '{"depraedor":"verus","denuo":"caterva","vomica":"odit"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('c244e167-e483-4137-8420-d2c217efd8e7', 'q1w2e3r4t5y6u7i8o9p0', '{"tendo":"paulatim","vis":"sortitus","carmen":"patria","balbus":"agnitio","vulgaris":"comparo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d47e66c1-d796-443d-8e2d-0e1c020d3653', 'q1w2e3r4t5y6u7i8o9p0', '{"reiciendis":"audeo","arcus":"vociferor","apud":"adulescens","textor":"comprehendo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('1b52e404-bb7a-49d5-a253-661c3d0fd638', 'm1n2b3v4c5x6z7a8s9d0', '{"argentum":"substantia","statua":"pectus","urbs":"stabilis","textor":"cribro"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('09f79f47-2723-4bdd-b5c8-f342c3cf4eb6', 'z9y8x7w6v5u4t3s2r1q0', '{"natus":"aegrus","sto":"corporis","compello":"aedificium","auxilium":"perferendis","ratione":"claustrum"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('20e6dc98-202f-4984-a8d0-5e52369b0a5c', 'a1b2c3d4e5f6g7h8i9j0', '{"voco":"apud","depulso":"demergo","avaritia":"curvo","tunc":"coadunatio","uredo":"usque"}'::jsonb);

INSERT INTO "Outfit" ("id", "description", "imageUrl", "style", "color", "occasion") VALUES ('d264fe57-2470-43d6-8bc3-6d4e5867bc42', 'Casual denim jacket paired with a white tee.', 'https://i.imgur.com/YfJQV5z.png?id=102', 'Bohemian', 'Blue', 'Wedding');
INSERT INTO "Outfit" ("id", "description", "imageUrl", "style", "color", "occasion") VALUES ('ba0ab37a-ebe0-4352-9a2c-37a34e03dbb4', 'Elegant evening gown with intricate lace details.', 'https://i.imgur.com/YfJQV5z.png?id=108', 'Casual', 'Green', 'Wedding');
INSERT INTO "Outfit" ("id", "description", "imageUrl", "style", "color", "occasion") VALUES ('c5a3f42e-8c39-46e2-b0d5-963e3ef97f5d', 'Casual denim jacket paired with a white tee.', 'https://i.imgur.com/YfJQV5z.png?id=114', 'Athleisure', 'White', 'Workout');
INSERT INTO "Outfit" ("id", "description", "imageUrl", "style", "color", "occasion") VALUES ('10b32b33-abfc-49c0-8e36-eb3dca9c7cfa', 'Classic black suit for formal events.', 'https://i.imgur.com/YfJQV5z.png?id=120', 'Casual', 'White', 'Party');
INSERT INTO "Outfit" ("id", "description", "imageUrl", "style", "color", "occasion") VALUES ('869a69c8-b2c9-4af3-a5c9-ef0594ae1c0d', 'Sporty tracksuit ideal for morning runs.', 'https://i.imgur.com/YfJQV5z.png?id=126', 'Bohemian', 'Blue', 'Office');
INSERT INTO "Outfit" ("id", "description", "imageUrl", "style", "color", "occasion") VALUES ('555e4de7-1fa1-4515-885f-98220cb4a027', 'Elegant evening gown with intricate lace details.', 'https://i.imgur.com/YfJQV5z.png?id=132', 'Formal', 'Red', 'Wedding');
INSERT INTO "Outfit" ("id", "description", "imageUrl", "style", "color", "occasion") VALUES ('4e5c943e-7337-4c20-8384-30d4acef69ce', 'A chic summer dress perfect for beach outings.', 'https://i.imgur.com/YfJQV5z.png?id=138', 'Vintage', 'White', 'Party');
INSERT INTO "Outfit" ("id", "description", "imageUrl", "style", "color", "occasion") VALUES ('37c640e0-ee0f-4964-a1d3-fb1d8c4b2cb7', 'Casual denim jacket paired with a white tee.', 'https://i.imgur.com/YfJQV5z.png?id=144', 'Formal', 'White', 'Office');
INSERT INTO "Outfit" ("id", "description", "imageUrl", "style", "color", "occasion") VALUES ('1f835178-f98c-415f-b798-11e4aac13173', 'Casual denim jacket paired with a white tee.', 'https://i.imgur.com/YfJQV5z.png?id=150', 'Casual', 'Red', 'Casual Outing');
INSERT INTO "Outfit" ("id", "description", "imageUrl", "style", "color", "occasion") VALUES ('897ea4de-2980-4f00-b722-d0fdb9fba00f', 'Casual denim jacket paired with a white tee.', 'https://i.imgur.com/YfJQV5z.png?id=156', 'Bohemian', 'White', 'Party');

INSERT INTO "HumanIdentification" ("id", "bodyMeasurements", "poseData", "userId") VALUES ('829bd1cd-8993-4b1f-81e8-801a4e7f7297', 'Height 165cm Chest 88cm Waist 68cm Hips 92cm', 'Pose Standing Hands on hips', '9692a26e-7791-4224-bb1f-7ab8a08ec517');
INSERT INTO "HumanIdentification" ("id", "bodyMeasurements", "poseData", "userId") VALUES ('0f9c1b1e-c02e-4183-b8e8-5a9e705aa459', 'Height 175cm Chest 95cm Waist 75cm Hips 100cm', 'Pose Walking Left foot forward', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "HumanIdentification" ("id", "bodyMeasurements", "poseData", "userId") VALUES ('3e05d4d0-b532-4cff-a50f-9200b4393927', 'Height 175cm Chest 95cm Waist 75cm Hips 100cm', 'Pose Standing Hands on hips', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "HumanIdentification" ("id", "bodyMeasurements", "poseData", "userId") VALUES ('42e648b9-f037-4c01-a62e-49b8bae4d02c', 'Height 170cm Chest 90cm Waist 70cm Hips 95cm', 'Pose Walking Left foot forward', '86347334-38d7-4c6d-9b54-ff3d2a5c1624');
INSERT INTO "HumanIdentification" ("id", "bodyMeasurements", "poseData", "userId") VALUES ('858b53c9-593c-4c3d-92e8-1e32e89139f5', 'Height 175cm Chest 95cm Waist 75cm Hips 100cm', 'Pose Standing Arms at sides', '34b21d74-792e-4498-8e3f-d265d5dd4c65');
INSERT INTO "HumanIdentification" ("id", "bodyMeasurements", "poseData", "userId") VALUES ('7948d316-3407-484b-822c-444a98a46c0d', 'Height 160cm Chest 85cm Waist 65cm Hips 90cm', 'Pose Standing Hands on hips', '05f2504a-7fde-4163-898f-4e48943cce3f');
INSERT INTO "HumanIdentification" ("id", "bodyMeasurements", "poseData", "userId") VALUES ('97edeced-18cc-4e2e-8ff6-b41a9e1192cf', 'Height 170cm Chest 90cm Waist 70cm Hips 95cm', 'Pose Standing Hands on hips', '322ea318-ad64-4a48-a935-2c8280e6d45b');
INSERT INTO "HumanIdentification" ("id", "bodyMeasurements", "poseData", "userId") VALUES ('2d0fdfda-bd01-4775-b0b2-ee5d1fdb7d72', 'Height 180cm Chest 100cm Waist 80cm Hips 105cm', 'Pose Standing Hands on hips', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "HumanIdentification" ("id", "bodyMeasurements", "poseData", "userId") VALUES ('17e43a89-9020-4b36-aa7d-487647fad510', 'Height 165cm Chest 88cm Waist 68cm Hips 92cm', 'Pose Standing Arms at sides', '9a2c186f-23e9-4d0b-a625-ccdb6bf41d7f');
INSERT INTO "HumanIdentification" ("id", "bodyMeasurements", "poseData", "userId") VALUES ('d95fc636-7e22-4492-ac2d-8a8decf7912b', 'Height 165cm Chest 88cm Waist 68cm Hips 92cm', 'Pose Standing Arms at sides', '813a4de1-5f0f-4a30-a73a-db45cb6c845b');

INSERT INTO "Recommendation" ("id", "recommendationType", "reason", "userId", "outfitId") VALUES ('0e61e0e0-c9fb-4db6-ab30-b0e98a22c25f', 'Party', 'Based on your recent searches', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '869a69c8-b2c9-4af3-a5c9-ef0594ae1c0d');
INSERT INTO "Recommendation" ("id", "recommendationType", "reason", "userId", "outfitId") VALUES ('06eae600-2951-4836-ad1f-13d6f6efa8ff', 'Casual', 'Matches your color preference', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'd264fe57-2470-43d6-8bc3-6d4e5867bc42');
INSERT INTO "Recommendation" ("id", "recommendationType", "reason", "userId", "outfitId") VALUES ('82976e1f-096e-472f-bf3f-b75a5dac50df', 'Formal', 'Matches your color preference', 'd4425cfd-03bc-4a36-ac6d-8a45f3440223', 'd264fe57-2470-43d6-8bc3-6d4e5867bc42');
INSERT INTO "Recommendation" ("id", "recommendationType", "reason", "userId", "outfitId") VALUES ('6b8e18e3-494c-4894-89e7-44864da3d016', 'Business', 'Trending in your area', '86c23e47-1bdb-4a96-9fcf-1a60052d459c', 'c5a3f42e-8c39-46e2-b0d5-963e3ef97f5d');
INSERT INTO "Recommendation" ("id", "recommendationType", "reason", "userId", "outfitId") VALUES ('b0b5bf2c-aa08-4eef-b295-ad413a2d434d', 'Casual', 'Matches your color preference', '9a2c186f-23e9-4d0b-a625-ccdb6bf41d7f', '1f835178-f98c-415f-b798-11e4aac13173');
INSERT INTO "Recommendation" ("id", "recommendationType", "reason", "userId", "outfitId") VALUES ('3058fe7d-970f-44a5-a64b-c3f8f28edf0c', 'Casual', 'Based on your recent searches', '9a2c186f-23e9-4d0b-a625-ccdb6bf41d7f', 'd264fe57-2470-43d6-8bc3-6d4e5867bc42');
INSERT INTO "Recommendation" ("id", "recommendationType", "reason", "userId", "outfitId") VALUES ('54dbe7d8-0328-4c9e-a9a5-a09f210035cc', 'Business', 'Recommended by our fashion experts', '322ea318-ad64-4a48-a935-2c8280e6d45b', 'd264fe57-2470-43d6-8bc3-6d4e5867bc42');
INSERT INTO "Recommendation" ("id", "recommendationType", "reason", "userId", "outfitId") VALUES ('4eb2d5ed-bf66-42ee-873f-969f085953b9', 'Party', 'Matches your color preference', '813a4de1-5f0f-4a30-a73a-db45cb6c845b', '1f835178-f98c-415f-b798-11e4aac13173');
INSERT INTO "Recommendation" ("id", "recommendationType", "reason", "userId", "outfitId") VALUES ('6ef3e068-0399-4c1c-8e1c-f30388c54389', 'Sporty', 'Based on your recent searches', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '10b32b33-abfc-49c0-8e36-eb3dca9c7cfa');
INSERT INTO "Recommendation" ("id", "recommendationType", "reason", "userId", "outfitId") VALUES ('e14ac14b-1440-4769-aeeb-494a7ce3f8b9', 'Sporty', 'Trending in your area', '86c23e47-1bdb-4a96-9fcf-1a60052d459c', '869a69c8-b2c9-4af3-a5c9-ef0594ae1c0d');

INSERT INTO "VirtualTryOn" ("id", "tryOnImageUrl", "userId", "outfitId") VALUES ('02303323-232e-488a-8aa2-a1c198ac261e', 'https://i.imgur.com/YfJQV5z.png?id=221', '86c23e47-1bdb-4a96-9fcf-1a60052d459c', '555e4de7-1fa1-4515-885f-98220cb4a027');
INSERT INTO "VirtualTryOn" ("id", "tryOnImageUrl", "userId", "outfitId") VALUES ('8a82ee8d-8d5a-450c-9c98-186ba87f7e15', 'https://i.imgur.com/YfJQV5z.png?id=223', '05f2504a-7fde-4163-898f-4e48943cce3f', '869a69c8-b2c9-4af3-a5c9-ef0594ae1c0d');
INSERT INTO "VirtualTryOn" ("id", "tryOnImageUrl", "userId", "outfitId") VALUES ('c06f62b5-76ff-4ca3-8e93-4bbe2c5630ac', 'https://i.imgur.com/YfJQV5z.png?id=225', '813a4de1-5f0f-4a30-a73a-db45cb6c845b', '869a69c8-b2c9-4af3-a5c9-ef0594ae1c0d');
INSERT INTO "VirtualTryOn" ("id", "tryOnImageUrl", "userId", "outfitId") VALUES ('fb8c398c-636c-4055-90b5-217720b42b73', 'https://i.imgur.com/YfJQV5z.png?id=227', '86c23e47-1bdb-4a96-9fcf-1a60052d459c', 'c5a3f42e-8c39-46e2-b0d5-963e3ef97f5d');
INSERT INTO "VirtualTryOn" ("id", "tryOnImageUrl", "userId", "outfitId") VALUES ('b89df66b-538f-40cf-a632-4e70e9002391', 'https://i.imgur.com/YfJQV5z.png?id=229', 'd4425cfd-03bc-4a36-ac6d-8a45f3440223', '897ea4de-2980-4f00-b722-d0fdb9fba00f');
INSERT INTO "VirtualTryOn" ("id", "tryOnImageUrl", "userId", "outfitId") VALUES ('dd60bc6b-fb30-4863-9f19-43c9381e0abb', 'https://i.imgur.com/YfJQV5z.png?id=231', '05f2504a-7fde-4163-898f-4e48943cce3f', '37c640e0-ee0f-4964-a1d3-fb1d8c4b2cb7');
INSERT INTO "VirtualTryOn" ("id", "tryOnImageUrl", "userId", "outfitId") VALUES ('ad1873ca-1098-46e1-af95-343d955a7761', 'https://i.imgur.com/YfJQV5z.png?id=233', '322ea318-ad64-4a48-a935-2c8280e6d45b', '897ea4de-2980-4f00-b722-d0fdb9fba00f');
INSERT INTO "VirtualTryOn" ("id", "tryOnImageUrl", "userId", "outfitId") VALUES ('0ad1e326-a137-48fc-9733-1323ae309817', 'https://i.imgur.com/YfJQV5z.png?id=235', '05f2504a-7fde-4163-898f-4e48943cce3f', 'c5a3f42e-8c39-46e2-b0d5-963e3ef97f5d');
INSERT INTO "VirtualTryOn" ("id", "tryOnImageUrl", "userId", "outfitId") VALUES ('e7776ab5-1063-4616-a94d-1276384472f4', 'https://i.imgur.com/YfJQV5z.png?id=237', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ba0ab37a-ebe0-4352-9a2c-37a34e03dbb4');
INSERT INTO "VirtualTryOn" ("id", "tryOnImageUrl", "userId", "outfitId") VALUES ('fc0bec1a-5b7c-4648-8fd6-a72bb29999c0', 'https://i.imgur.com/YfJQV5z.png?id=239', '322ea318-ad64-4a48-a935-2c8280e6d45b', '869a69c8-b2c9-4af3-a5c9-ef0594ae1c0d');

INSERT INTO "ChatbotConversation" ("id", "conversationData", "userId") VALUES ('ae4b4864-16dc-4a5f-b8d6-be52c3644685', 'User Can you help me find an outfit for a job interviewBot Of course Do you prefer a more traditional or modern lookUser A modern look.Bot How about a tailored blazer slimfit trousers and a crisp white shirt', 'd4425cfd-03bc-4a36-ac6d-8a45f3440223');
INSERT INTO "ChatbotConversation" ("id", "conversationData", "userId") VALUES ('c9222ae3-6edd-4403-a311-0057dff6fac7', 'User Hi Im looking for a casual outfit for a weekend getaway.Bot Sure Do you have any color preferencesUser I love blues and whites.Bot Great How about a pair of white sneakers blue jeans and a striped blue and white shirt', '86347334-38d7-4c6d-9b54-ff3d2a5c1624');
INSERT INTO "ChatbotConversation" ("id", "conversationData", "userId") VALUES ('c373777b-a6ed-45e3-8168-5626be5dd90f', 'User Can you recommend an outfit for a formal dinnerBot Absolutely Do you prefer a dress or a suitUser A dress would be nice.Bot How about a black evening gown with silver accessories', '322ea318-ad64-4a48-a935-2c8280e6d45b');
INSERT INTO "ChatbotConversation" ("id", "conversationData", "userId") VALUES ('71b926c3-565f-44dc-afcd-4e386353ae44', 'User Can you help me find an outfit for a job interviewBot Of course Do you prefer a more traditional or modern lookUser A modern look.Bot How about a tailored blazer slimfit trousers and a crisp white shirt', '813a4de1-5f0f-4a30-a73a-db45cb6c845b');
INSERT INTO "ChatbotConversation" ("id", "conversationData", "userId") VALUES ('302b10ce-ebd1-486b-a86c-20260759395c', 'User Whats trending in summer fashionBot This summer bright colors and floral patterns are in. Would you like some outfit suggestionsUser Yes pleaseBot How about a floral sundress with a widebrimmed hat and sandals', 'd4425cfd-03bc-4a36-ac6d-8a45f3440223');
INSERT INTO "ChatbotConversation" ("id", "conversationData", "userId") VALUES ('6e8fc130-29ab-4f6d-9a8b-a27aa4b0d039', 'User Can you recommend an outfit for a formal dinnerBot Absolutely Do you prefer a dress or a suitUser A dress would be nice.Bot How about a black evening gown with silver accessories', '05f2504a-7fde-4163-898f-4e48943cce3f');
INSERT INTO "ChatbotConversation" ("id", "conversationData", "userId") VALUES ('bda8d354-9f0d-42f2-80e5-513a97013a20', 'User Whats trending in summer fashionBot This summer bright colors and floral patterns are in. Would you like some outfit suggestionsUser Yes pleaseBot How about a floral sundress with a widebrimmed hat and sandals', '9a2c186f-23e9-4d0b-a625-ccdb6bf41d7f');
INSERT INTO "ChatbotConversation" ("id", "conversationData", "userId") VALUES ('ef237582-f5f0-4a55-8dae-94b9644e02bf', 'User Whats trending in summer fashionBot This summer bright colors and floral patterns are in. Would you like some outfit suggestionsUser Yes pleaseBot How about a floral sundress with a widebrimmed hat and sandals', '9a2c186f-23e9-4d0b-a625-ccdb6bf41d7f');
INSERT INTO "ChatbotConversation" ("id", "conversationData", "userId") VALUES ('8f225c7c-222f-48de-bdaf-348d2beca51f', 'User Hi Im looking for a casual outfit for a weekend getaway.Bot Sure Do you have any color preferencesUser I love blues and whites.Bot Great How about a pair of white sneakers blue jeans and a striped blue and white shirt', '34b21d74-792e-4498-8e3f-d265d5dd4c65');
INSERT INTO "ChatbotConversation" ("id", "conversationData", "userId") VALUES ('0d673c3e-0ad5-4dc8-ae7a-d5993d664c56', 'User Hi Im looking for a casual outfit for a weekend getaway.Bot Sure Do you have any color preferencesUser I love blues and whites.Bot Great How about a pair of white sneakers blue jeans and a striped blue and white shirt', '86c23e47-1bdb-4a96-9fcf-1a60052d459c');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
