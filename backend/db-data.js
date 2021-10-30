const satellites = {
    1: {
        id: 1,
        description: 'GSAT 19',
        longDescription: 'GSAT-19 is an Indian communications satellite launched by the ISRO.',
        iconUrl: 'https://media.wired.com/photos/5b52582f59269e342890a45a/125:94/w_2375,h_1786,c_limit/Satellite_FHM56J.jpg',
        equipmentsCount: 3,
        url: 'GSAT'
    },
    2: {
        id: 2,
        description: 'VIASAT 2',
        longDescription: `VIASAT 2 is a commercial communications satellite which will be the world's highest capacity communications satellite after it becomes commercially available in early 2018.`,
        iconUrl: 'https://cdn.vox-cdn.com/thumbor/xlXex1tg-bGSLpCOEpW275tsKdY=/0x0:3982x2240/1200x800/filters:focal(1673x802:2309x1438)/cdn.vox-cdn.com/uploads/chorus_image/image/66421553/Geely_Sat.0.jpg',
        equipmentsCount: 5,
        url: 'VIASAT'
    },
    3: {
        id: 3,
        description: 'LANDSAT 8',
        longDescription: 'The Landsat Data Continuity Mission (LDCM), a collaboration between NASA and the U.',
        iconUrl: 'https://sia.org/wp-content/uploads/2019/11/home-slider_new.jpg',
        equipmentsCount: 2,
        url: 'LANDSAT'
    },
    4: {
        id: 4,
        description: 'MEASAT 3A',
        longDescription: '12 Ku-band and 12 C-band transponders to provide C-band communications services throughout Asia, the Middle East and Africa, and Ku-band direct-to-home television broadcasting to Malaysia and Indonesia.',
        iconUrl: 'https://www.nato.int/nato_static_fl2014/assets/pictures/images_mfu/2021/4/stock/210423-satcom.jpg',
        equipmentsCount: 3,
        url: 'MEASAT'
    }
};

const equipments = {
    1: {
        id: 1,
        description: 'Equipment 1 for GSAT 19',
        satelliteId: 1
    },
    2: {
        id: 2,
        description: 'Equipment 2 for GSAT 19',
        satelliteId: 1
    },
    3: {
        id: 3,
        description: 'Equipment 3 for GSAT 19',
        satelliteId: 1
    },
    4: {
        id: 4,
        description: 'Equipment 1 for VIASAT 2',
        satelliteId: 2
    },
    5: {
        id: 5,
        description: 'Equipment 2 for VIASAT 2',
        satelliteId: 2
    },
    6: {
        id: 6,
        description: 'Equipment 3 for VIASAT 2',
        satelliteId: 2
    },
    7: {
        id: 7,
        description: 'Equipment 4 for VIASAT 2',
        satelliteId: 2
    },
    8: {
        id: 8,
        description: 'Equipment 5 for VIASAT 2',
        satelliteId: 2
    },
    9: {
        id: 9,
        description: 'Equipment 1 for LANDSAT 8',
        satelliteId: 3
    },
    10: {
        id: 10,
        description: 'Equipment 2 for LANDSAT 8',
        satelliteId: 3
    },
    11: {
        id: 11,
        description: 'Equipment 1 for MEASAT 3A',
        satelliteId: 4
    },
    12: {
        id: 12,
        description: 'Equipment 2 for MEASAT 3A',
        satelliteId: 4
    },
    13: {
        id: 13,
        description: 'Equipment 3 for MEASAT 3A',
        satelliteId: 4
    },
}

const users = {
    1: {
        id: 1,
        email: 'test@test.com',
        password: 'test',
        admin: false
    },
    2: {
        id: 1,
        email: 'admin@test.com',
        password: 'test',
        admin: true
    }
};

module.exports = {satellites, equipments, users}