# AI Institution V7 Enhanced V2 Final - Brain Icon PWA

## Features Fixed in this ZIP:
- Mobile/Desktop toggle (phone frame 390px)
- 7 Animated Themes (Emerald, Ocean, Violet, Sunset, Midnight, Forest, Desert)
- Quran Tajweed full colors + non-stop full surah play + harf-only coloring
- Fest Hub Programs - type custom programs (Arabi Ganam etc)
- Gallery direct upload (not URL paste) - 3 photos Ken Burns 360px banner
- Profile Creation for other madrasas
- Links & Access 6 tabs: Usthad/Parents/PTA/Stage/Judge/Management with Copy+QR+WhatsApp share, Permissions checkboxes, Parents class-based add/remove
- PTA global link - no pre-add needed, anyone joins via link
- Chest Shuffle Lot auto animation, Stage Manager lot, Judge panel lot order, Admin control edit any marks
- Certificate/Events add working + Spot Import CSV
- Class-based Fees (who paid who not), Homework, Notes per class
- WhatsApp-like popups + bell count
- PWA brain icon (green-blue gradient brain+book) - lightweight SW no hang
- Monthly attendance CSV download, Photo temporary storage

## Deploy to GitHub Pages:
1. Delete old files in your repo
2. Upload all files from this ZIP (index.html, manifest.json, sw.js, assets/, firestore.rules, README.md)
3. GitHub Settings > Pages > Deploy from branch main/root > Save
4. Live in 2 mins: https://bbba45991-cmd.github.io/Ai-institution-/
5. Publish firestore.rules: Firebase Console > Firestore > Rules > paste firestore.rules > Publish
6. Phone install: Open site > Install App button or Share > Add to Home Screen - Brain icon shows

## Roles:
- Usthad: ?role=usthad&profile={id}&teacher={teacherId}&token=...
- Parents: ?role=parent&profile={id}&parent={parentId}
- PTA: ?role=pta&profile={id}
- Stage: ?role=stage&profile={id}&venue={venueId}&manager={managerId}
- Judge: ?role=judge&profile={id}&judge={judgeId}
- Management: ?role=management&profile={id}&mgmt={mgmtId}
