export type FieldType = 'text' | 'checkbox' | 'date' | 'signature' | 'textarea';

export interface FieldConfig {
    id: string;
    type: FieldType;
    label: string;
    x: number; // Percentage (0-100)
    y: number; // Percentage (0-100)
    width?: number; // Percentage (0-100), relevant for text/textarea
    height?: number; // Percentage, relevant for textarea or signature
    value?: string | boolean; // Initial value or current value
}

export interface FormDefinition {
    id: string;
    name: string;
    imagePath: string;
    defaultFields: FieldConfig[];
}

export const FORM_DEFS: FormDefinition[] = [
    {
        id: 'entry-door',
        name: 'Entry Door',
        imagePath: '/forms/entry-door.png',
        defaultFields: [
            {
                "id": "bca399ce-17db-4ee9-98d4-4563f6ac5970",
                "type": "textarea",
                "label": "New textarea",
                "x": 9.754601226993866,
                "y": 72.37288135593221,
                "width": 82.94478527607362,
                "height": 16.694915254237287,
                "value": ""
            },
            {
                "id": "975e25be-9562-4d5e-a0ef-2449f572836b",
                "type": "text",
                "label": "New text",
                "x": 23.37423312883436,
                "y": 18.389830508474574,
                "width": 40.42944785276074,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "abdb4077-e992-4850-8bc4-fbab3fe461c1",
                "type": "text",
                "label": "New text",
                "x": 80.30674846625767,
                "y": 15.508474576271187,
                "width": 13.43558282208589,
                "height": 4.1525423728813555,
                "value": ""
            },
            {
                "id": "75b6f09d-23c1-4070-90b3-872f25bab598",
                "type": "text",
                "label": "New text",
                "x": 23.12883435582822,
                "y": 20.93220338983051,
                "width": 42.88343558282209,
                "height": 5.677966101694915,
                "value": ""
            },
            {
                "id": "2ddce560-0fa3-4a67-9b21-b3acca8e12a5",
                "type": "text",
                "label": "New text",
                "x": 23.742331288343557,
                "y": 28.983050847457626,
                "width": 19.570552147239265,
                "height": 5.2542372881355925,
                "value": ""
            },
            {
                "id": "76d1ecc0-e831-47d3-ab7c-b744e174e5b0",
                "type": "text",
                "label": "New text",
                "x": 64.84662576687117,
                "y": 28.983050847457626,
                "width": 28.65030674846626,
                "height": 5.169491525423728,
                "value": ""
            },
            {
                "id": "502273fb-eb27-4649-a1ad-a6a3bf0c684a",
                "type": "text",
                "label": "New text",
                "x": 36.38036809815951,
                "y": 31.694915254237287,
                "width": 30,
                "value": ""
            },
            {
                "id": "9306585a-1499-4f5f-9ac8-fc86bff4be0c",
                "type": "text",
                "label": "New text",
                "x": 23.496932515337424,
                "y": 34.91525423728813,
                "width": 20.797546012269937,
                "height": 5.932203389830509,
                "value": ""
            },
            {
                "id": "892aae98-e065-4ac3-8136-20c886d91c5e",
                "type": "text",
                "label": "New text",
                "x": 69.2638036809816,
                "y": 35.76271186440678,
                "width": 24.11042944785276,
                "height": 5,
                "value": ""
            },
            {
                "id": "565fa95e-460e-420e-b3db-1e3609b7688a",
                "type": "text",
                "label": "New text",
                "x": 30.981595092024538,
                "y": 38.220338983050844,
                "width": 27.05521472392638,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "51aa8db9-c2d2-4469-b950-09cd6d54398a",
                "type": "text",
                "label": "New text",
                "x": 67.17791411042946,
                "y": 38.38983050847458,
                "width": 25.828220858895705,
                "height": 5,
                "value": ""
            },
            {
                "id": "fd7b0e5c-fd78-4874-81ee-807960c418ca",
                "type": "text",
                "label": "New text",
                "x": 77.36196319018404,
                "y": 40.76271186440678,
                "width": 16.380368098159508,
                "height": 5.762711864406779,
                "value": ""
            },
            {
                "id": "21f45174-e96c-4594-84a1-72bae47c5f60",
                "type": "text",
                "label": "New text",
                "x": 23.12883435582822,
                "y": 40.932203389830505,
                "width": 35.644171779141104,
                "height": 5.2542372881355925,
                "value": ""
            },
            {
                "id": "d854202d-45ce-4814-a38b-9bb8e5ef8f3e",
                "type": "text",
                "label": "New text",
                "x": 30.736196319018404,
                "y": 43.64406779661017,
                "width": 30,
                "value": ""
            },
            {
                "id": "654e4f86-b27e-4aab-963f-8ac1b9478d95",
                "type": "text",
                "label": "New text",
                "x": 31.104294478527606,
                "y": 46.101694915254235,
                "width": 30,
                "value": ""
            },
            {
                "id": "5f60661c-2d1d-4be3-bb46-504bbf792207",
                "type": "text",
                "label": "New text",
                "x": 67.42331288343559,
                "y": 43.64406779661017,
                "width": 26.68711656441718,
                "height": 5,
                "value": ""
            },
            {
                "id": "c50e8a5e-10c2-4ec4-bede-cea236f6769d",
                "type": "text",
                "label": "New text",
                "x": 67.05521472392638,
                "y": 46.355932203389834,
                "width": 26.68711656441718,
                "height": 5.677966101694915,
                "value": ""
            },
            {
                "id": "78061dbd-f97d-4851-bc58-2e5c8d12cf14",
                "type": "text",
                "label": "New text",
                "x": 29.141104294478527,
                "y": 49.32203389830509,
                "width": 30,
                "value": ""
            },
            {
                "id": "912463c0-fd1a-40c4-8e3f-a972d2648987",
                "type": "text",
                "label": "New text",
                "x": 31.472392638036812,
                "y": 53.30508474576271,
                "width": 26.68711656441718,
                "height": 5.423728813559322,
                "value": ""
            },
            {
                "id": "704ffac0-8c66-4109-a4bb-1588ad49d994",
                "type": "text",
                "label": "New text",
                "x": 9.754601226993866,
                "y": 53.3050847457627,
                "width": 10.245398773006135,
                "height": 5.2542372881355925,
                "value": ""
            },
            {
                "id": "b632bf18-bacd-46ef-9829-d062377afbae",
                "type": "text",
                "label": "New text",
                "x": 67.42331288343559,
                "y": 54.067796610169495,
                "width": 26.196319018404907,
                "height": 5,
                "value": ""
            },
            {
                "id": "34443b9d-4593-4984-9621-63f916184040",
                "type": "text",
                "label": "New text",
                "x": 67.30061349693251,
                "y": 50.33898305084745,
                "width": 26.93251533742331,
                "height": 5.084745762711865,
                "value": ""
            },
            {
                "id": "bc458662-673b-46d8-9c4c-d5087f091e9a",
                "type": "text",
                "label": "New text",
                "x": 67.42331288343559,
                "y": 56.779661016949156,
                "width": 26.319018404907972,
                "height": 5.169491525423728,
                "value": ""
            },
            {
                "id": "900fb2ee-7672-4966-a72a-72b9c288cb7a",
                "type": "text",
                "label": "New text",
                "x": 28.52760736196319,
                "y": 56.86440677966102,
                "width": 30,
                "value": ""
            },
            {
                "id": "51e27c99-5dac-4591-bfca-c1e2e9cf5af1",
                "type": "text",
                "label": "New text",
                "x": 72.33128834355828,
                "y": 61.94915254237288,
                "width": 21.165644171779142,
                "height": 5.338983050847458,
                "value": ""
            },
            {
                "id": "3f66cf02-f5ec-481e-8285-ab205342357f",
                "type": "text",
                "label": "New text",
                "x": 47.42331288343558,
                "y": 59.7457627118644,
                "width": 24.355828220858896,
                "height": 5.2542372881355925,
                "value": ""
            },
            {
                "id": "55e213f0-7d9c-4dfd-a30d-f9c74abb2c2d",
                "type": "text",
                "label": "New text",
                "x": 47.42331288343558,
                "y": 61.94915254237288,
                "width": 23.987730061349694,
                "height": 5.169491525423728,
                "value": ""
            },
            {
                "id": "204a89f6-f2ef-4459-b4b3-fc99d0a02307",
                "type": "text",
                "label": "New text",
                "x": 51.84049079754601,
                "y": 69.91525423728814,
                "width": 19.8159509202454,
                "height": 5.2542372881355925,
                "value": ""
            },
            {
                "id": "869e81ba-c923-4e12-b8cb-ccf755198494",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.619631901840492,
                "y": 22.796610169491522,
                "width": 30,
                "value": ""
            },
            {
                "id": "9eafc0ac-f6b6-4a27-86ee-a2560522718f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.742331288343557,
                "y": 24.83050847457627,
                "width": 30,
                "value": ""
            },
            {
                "id": "1fc229d0-494f-4522-a3cf-804336e8d664",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 44.601226993865026,
                "y": 22.966101694915253,
                "width": 30,
                "value": false
            },
            {
                "id": "ff5c6a4c-ccad-4c35-8d22-411ded7b8ff5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 44.723926380368106,
                "y": 24.74576271186441,
                "width": 30,
                "value": false
            },
            {
                "id": "785df539-f506-4f4f-a19c-6a0faa56c4b9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 68.8957055214724,
                "y": 23.135593220338983,
                "width": 30,
                "value": ""
            },
            {
                "id": "6c8060f2-1a8d-4715-8091-6fb89f90a4c4",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 68.8957055214724,
                "y": 24.83050847457627,
                "width": 30,
                "value": ""
            },
            {
                "id": "17352298-778a-4d9f-ad3a-24a0e15aae7c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 68.8957055214724,
                "y": 18.135593220338983,
                "width": 30,
                "value": ""
            },
            {
                "id": "017f2412-6b19-46ba-a5f5-cbed8b9961f9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 69.14110429447852,
                "y": 20.847457627118644,
                "width": 30,
                "value": ""
            },
            {
                "id": "c7710896-ea41-434d-bb35-67abfd3f1bd0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 44.7239263803681,
                "y": 27.033898305084747,
                "width": 30,
                "value": ""
            },
            {
                "id": "b2bf37a3-7e17-4e25-9628-a706d9536583",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 44.84662576687117,
                "y": 29.152542372881356,
                "width": 30,
                "value": ""
            },
            {
                "id": "78376db0-3c2a-486b-8553-0c7c58687515",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 44.84662576687117,
                "y": 33.89830508474576,
                "width": 30,
                "value": ""
            },
            {
                "id": "71a1be2f-3da6-490c-978a-7d10cd885716",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 51.717791411042946,
                "y": 33.89830508474576,
                "width": 30,
                "value": ""
            },
            {
                "id": "5a8630e3-0387-49ca-be6b-7302e0c0db31",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.619631901840492,
                "y": 59.49152542372881,
                "width": 30,
                "value": ""
            },
            {
                "id": "38d679eb-6435-42c9-a81e-3fe8dd0a23a5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.865030674846626,
                "y": 61.694915254237294,
                "width": 30,
                "value": ""
            },
            {
                "id": "bd0a6e14-aefd-4878-aaff-82d3a810a566",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 40.06134969325152,
                "y": 63.983050847457626,
                "width": 30,
                "value": ""
            },
            {
                "id": "34a16df9-8fb4-4d03-ae20-8cc98289abfa",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 39.93865030674847,
                "y": 65.67796610169492,
                "width": 30,
                "value": ""
            },
            {
                "id": "71f6dd9c-b1b7-4596-a050-d7dda8376ee8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 39.93865030674847,
                "y": 67.71186440677967,
                "width": 30,
                "value": ""
            },
            {
                "id": "b7cb440e-58bf-4737-bf7d-6b169c5e3cf7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 40.061349693251536,
                "y": 69.74576271186442,
                "width": 30,
                "value": ""
            },
            {
                "id": "300d4c25-7ab7-4153-9239-e437de7e8930",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.33128834355828,
                "y": 69.49152542372882,
                "width": 30,
                "value": ""
            },
            {
                "id": "8af4ac96-8526-45f9-b5be-de0d565ccf26",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.45398773006136,
                "y": 67.71186440677967,
                "width": 30,
                "value": ""
            },
            {
                "id": "fed513c6-9404-464d-b178-b0e711b64ed9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.33128834355828,
                "y": 65.84745762711864,
                "width": 30,
                "value": ""
            },
            {
                "id": "77dbe309-5bd0-4bbd-ba6f-6de5b1e20756",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.33128834355828,
                "y": 63.983050847457626,
                "width": 30,
                "value": ""
            },
            {
                "id": "b8d9c040-b301-4503-b9ad-b3417ea1dcb7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.742331288343557,
                "y": 69.57627118644068,
                "width": 30,
                "value": ""
            },
            {
                "id": "45c6d004-3773-4d56-88c6-4ed529daa78f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.619631901840492,
                "y": 67.79661016949152,
                "width": 30,
                "value": ""
            },
            {
                "id": "d4df3d11-c55e-4432-8fb2-d252252d6b6e",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.619631901840492,
                "y": 66.01694915254235,
                "width": 30,
                "value": ""
            },
            {
                "id": "543f701d-84df-44f8-97f2-2627a08a5d22",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.742331288343557,
                "y": 64.0677966101695,
                "width": 30,
                "value": ""
            },
            {
                "id": "c009821c-b863-4022-93b4-64f556e57af5",
                "type": "signature",
                "label": "New signature",
                "x": 7.546012269938649,
                "y": 89.57627118644068,
                "width": 30,
                "value": "SIGNED"
            },
            {
                "id": "7a5c93d4-7a7b-4135-b83c-091e78febe25",
                "type": "date",
                "label": "New date",
                "x": 73.92638036809815,
                "y": 91.35593220338983,
                "width": 30,
                "value": ""
            }
        ]
    },
    {
        id: 'roofing',
        name: 'Roofing',
        imagePath: '/forms/roofing.png',
        defaultFields: [
            {
                "id": "ac41d522-7f95-4772-96b6-18773175e23b",
                "type": "text",
                "label": "New text",
                "x": 24.49461686515097,
                "y": 18.983050847457626,
                "width": 30,
                "value": ""
            },
            {
                "id": "ad1e6fd5-c82c-439d-8cc2-ce8220ab92e0",
                "type": "text",
                "label": "New text",
                "x": 79.77926139781066,
                "y": 16.694915254237287,
                "width": 10.470347648261756,
                "height": 4.745762711864407,
                "value": ""
            },
            {
                "id": "81af6dac-735b-4386-869b-cb859a9be6ff",
                "type": "text",
                "label": "New text",
                "x": 10.569890532900276,
                "y": 23.220338983050848,
                "width": 9.652351738241306,
                "height": 5.762711864406779,
                "value": ""
            },
            {
                "id": "4548129e-9e19-425f-b0a6-6d9d7e31dac6",
                "type": "text",
                "label": "New text",
                "x": 24.574311319619873,
                "y": 23.050847457627118,
                "width": 18.241308793456028,
                "height": 5.169491525423728,
                "value": ""
            },
            {
                "id": "3b3743f6-8123-4fbf-a6ac-56e39a79f758",
                "type": "text",
                "label": "New text",
                "x": 46.53389269818356,
                "y": 23.389830508474578,
                "width": 10.572597137014313,
                "height": 5.338983050847458,
                "value": ""
            },
            {
                "id": "5a8bb432-b9f9-4933-9840-d63e5c90873d",
                "type": "text",
                "label": "New text",
                "x": 60.55936485023457,
                "y": 23.220338983050848,
                "width": 26.11451942740286,
                "height": 5.338983050847458,
                "value": ""
            },
            {
                "id": "eb7bdef7-d9d0-476b-b9a8-160775ce54d7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 70.31291350896186,
                "y": 18.813559322033903,
                "width": 30,
                "value": ""
            },
            {
                "id": "51dd7083-f8a4-4a94-a69b-2b9caa52cc8f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.2570973174546,
                "y": 21.525423728813557,
                "width": 30,
                "value": ""
            },
            {
                "id": "ccb450a4-0f59-4bae-a4b8-60b7929fc0a8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 9.52784794899555,
                "y": 25.67796610169491,
                "width": 30,
                "value": ""
            },
            {
                "id": "de1b30ec-af8d-42ea-9add-1a8aa007c4ac",
                "type": "text",
                "label": "New text",
                "x": 29.358985925658608,
                "y": 25.932203389830512,
                "width": 17.116564417177912,
                "height": 5.677966101694915,
                "value": ""
            },
            {
                "id": "7f6bba6c-ee01-416b-be69-32e1de6d9f6a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 50.112624804523044,
                "y": 25.593220338983052,
                "width": 30,
                "value": ""
            },
            {
                "id": "46b13444-6909-41be-b1b9-e0a60967b24a",
                "type": "text",
                "label": "New text",
                "x": 19.933237098520394,
                "y": 28.728813559322035,
                "width": 25.0920245398773,
                "height": 5.8474576271186445,
                "value": ""
            },
            {
                "id": "984afbb3-8dee-4d96-9bad-e9c560469d84",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.76690123902321,
                "y": 25.593220338983052,
                "width": 30,
                "value": ""
            },
            {
                "id": "f622e0ca-e16c-4133-ab30-991a0bcc77a8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.76690123902321,
                "y": 28.474576271186443,
                "width": 30,
                "value": ""
            },
            {
                "id": "a89d616a-da14-4aba-ba0f-18c65317b610",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 66.20338626248045,
                "y": 35.76271186440678,
                "width": 30,
                "value": ""
            },
            {
                "id": "1bc81533-d7ba-4e58-8b50-08726a073b0c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 65.99888728497534,
                "y": 33.98305084745763,
                "width": 30,
                "value": ""
            },
            {
                "id": "29bd4d27-a96e-42e2-9520-c28051e0d9d5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 65.99888728497534,
                "y": 32.11864406779661,
                "width": 30,
                "value": ""
            },
            {
                "id": "9e73b79d-49ae-4e04-a068-b3385ae69330",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 42.46571634788886,
                "y": 39.74576271186441,
                "width": 30,
                "value": ""
            },
            {
                "id": "de012292-0dc6-47cd-a884-93ba5d8528f6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 42.322867797425715,
                "y": 37.79661016949152,
                "width": 30,
                "value": ""
            },
            {
                "id": "7a9383d8-7c44-4818-9ae2-1b78b550ab6e",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 42.20031877781788,
                "y": 35.932203389830505,
                "width": 30,
                "value": ""
            },
            {
                "id": "bab77b4e-4ce3-43eb-ba81-53e2e147852b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 42.22061830867317,
                "y": 33.983050847457626,
                "width": 30,
                "value": ""
            },
            {
                "id": "87159729-0b2d-4c00-ad46-a841951fb750",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 42.40406592084686,
                "y": 31.949152542372882,
                "width": 30,
                "value": ""
            },
            {
                "id": "c4f4be44-a2ea-41cd-89e4-e1b00d8298f8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 9.548147479850837,
                "y": 37.88135593220339,
                "width": 30,
                "value": ""
            },
            {
                "id": "fb7e0a5d-15f9-47f3-93af-7b6c2318de4e",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.39017201972814,
                "y": 32.28813559322033,
                "width": 30,
                "value": ""
            },
            {
                "id": "8482d350-7a1f-46fc-87c2-fd60c07e5253",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 9.568447010706125,
                "y": 34.15254237288137,
                "width": 30,
                "value": ""
            },
            {
                "id": "0b0d0e01-8590-480a-a4ec-5a749ef89f5c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 9.690996030313968,
                "y": 31.864406779661014,
                "width": 30,
                "value": ""
            },
            {
                "id": "2e0e7869-e00f-46e6-a50d-f8ca253dcd1a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 66.20338626248045,
                "y": 37.71186440677967,
                "width": 30,
                "value": ""
            },
            {
                "id": "6e45b0af-4d31-4acb-a9ec-c00565844d5d",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 31.282178515578014,
                "y": 43.898305084745765,
                "width": 30,
                "value": ""
            },
            {
                "id": "2dcbd752-acae-46af-9975-94fa6d80e580",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 25.16901239023217,
                "y": 43.898305084745765,
                "width": 30,
                "value": ""
            },
            {
                "id": "aa08aec3-7f86-48c4-a171-bfdbe5585eee",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 52.19821364128473,
                "y": 45.2542372881356,
                "width": 30,
                "value": ""
            },
            {
                "id": "11a93124-48bc-494b-89f4-cdc8f9da578d",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.89546493444004,
                "y": 43.728813559322035,
                "width": 30,
                "value": ""
            },
            {
                "id": "8b5a9ed6-2e96-4c84-847a-7c48756d38d8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 78.89435221941538,
                "y": 43.72881355932204,
                "width": 30,
                "value": ""
            },
            {
                "id": "025cf79b-9c2e-465d-85a3-c2a8c7b403b9",
                "type": "text",
                "label": "New text",
                "x": 15.743263563093949,
                "y": 52.45762711864407,
                "width": 2.6993865030674824,
                "height": 4.661016949152542,
                "value": ""
            },
            {
                "id": "e55c0e49-61ea-4462-a1a1-c5cc6a48c921",
                "type": "text",
                "label": "New text",
                "x": 15.988361602309634,
                "y": 54.66101694915253,
                "width": 2.49488752556237,
                "height": 5.084745762711865,
                "value": ""
            },
            {
                "id": "642f9156-ee0e-4566-81aa-d054b534e3ec",
                "type": "text",
                "label": "New text",
                "x": 15.845513051846503,
                "y": 57.11864406779661,
                "width": 2.6993865030674824,
                "height": 5.677966101694915,
                "value": ""
            },
            {
                "id": "ab625475-d92c-41a5-b693-e185035c8910",
                "type": "text",
                "label": "New text",
                "x": 20.12269938650307,
                "y": 56.61016949152542,
                "width": 39.91820040899795,
                "height": 6.440677966101695,
                "value": ""
            },
            {
                "id": "ff7e5ee7-4fbb-4e94-910d-f33cc2a13ad4",
                "type": "text",
                "label": "New text",
                "x": 54.549200048117406,
                "y": 52.20338983050847,
                "width": 2.6993865030674824,
                "height": 6.610169491525424,
                "value": ""
            },
            {
                "id": "99a37e0d-db9d-4c9f-89ce-e0c997f56856",
                "type": "text",
                "label": "New text",
                "x": 54.5694995789727,
                "y": 54.57627118644067,
                "width": 3.1083844580777074,
                "height": 7.203389830508475,
                "value": ""
            },
            {
                "id": "ad236f1f-da36-45ef-a64b-097287383ef6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 38.25393961265489,
                "y": 59.237288135593225,
                "width": 30,
                "value": ""
            },
            {
                "id": "02ce29bf-7e1e-40df-9dcd-7267507cc248",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 25.43440996030314,
                "y": 59.237288135593225,
                "width": 30,
                "value": ""
            },
            {
                "id": "9dc77f31-e1fc-48ce-9ba8-1cdb3fdac35d",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 15.641014074341392,
                "y": 59.40677966101695,
                "width": 30,
                "value": ""
            },
            {
                "id": "93073452-3006-4f9a-8b55-91fb6ec036f3",
                "type": "text",
                "label": "New text",
                "x": 54.549200048117406,
                "y": 59.49152542372881,
                "width": 3.006134969325151,
                "height": 6.186440677966102,
                "value": ""
            },
            {
                "id": "928cb1ac-7294-446a-b7b4-c398f1b6a037",
                "type": "text",
                "label": "New text",
                "x": 64.93504150126309,
                "y": 59.06779661016949,
                "width": 21.717791411042942,
                "height": 5.8474576271186445,
                "value": ""
            },
            {
                "id": "df63ac64-5c9e-4c9c-af2e-4e899ff4b11d",
                "type": "textarea",
                "label": "New textarea",
                "x": 9.691747864790088,
                "y": 63.72881355932203,
                "width": 81.16910261036932,
                "height": 19.067796610169495,
                "value": ""
            },
            {
                "id": "f4593302-cf94-4820-a206-2b406ab5f6da",
                "type": "signature",
                "label": "New signature",
                "x": 7.7505112474437645,
                "y": 86.1864406779661,
                "width": 30,
                "value": ""
            },
            {
                "id": "36dd3f37-4a65-4e95-9e05-631e90ef7469",
                "type": "date",
                "label": "New date",
                "x": 73.82548418140262,
                "y": 91.10169491525426,
                "width": 30,
                "value": ""
            },
            {
                "id": "9b527931-7ba5-4dc2-9b8c-3ab9fed4f232",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 50.19607843137255,
                "y": 41.69491525423729,
                "width": 30,
                "value": ""
            }
        ]
    },
    {
        id: 'siding',
        name: 'Siding',
        imagePath: '/forms/siding.png',
        defaultFields: [
            {
                "id": "e6f4da85-eb2e-4eb4-bbf5-e30cd63bf6b0",
                "type": "text",
                "label": "New text",
                "x": 75.13292433537832,
                "y": 10.97323600973236,
                "width": 10.67484662576687,
                "height": 5.324412003244121,
                "value": ""
            },
            {
                "id": "78ffc399-c8df-47fd-92c8-bb381916b100",
                "type": "text",
                "label": "New text",
                "x": 15.214723926380369,
                "y": 15.596107055961072,
                "width": 30,
                "value": ""
            },
            {
                "id": "85f170a0-31a3-4586-aacb-a32647fbac46",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 50.38854805725972,
                "y": 15.43390105433901,
                "width": 30,
                "value": false
            },
            {
                "id": "38fd6645-1670-49cc-b7e8-a1f60a95c24c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 68.07770961145194,
                "y": 15.515004055150042,
                "width": 30,
                "value": ""
            },
            {
                "id": "1e67f4a2-ec5a-4819-9145-aebca7428893",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 60.40899795501022,
                "y": 18.272506082725062,
                "width": 30,
                "value": ""
            },
            {
                "id": "05fb3bab-fd50-491b-87a9-2ee7db3fa5a9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.697341513292436,
                "y": 18.110300081103002,
                "width": 30,
                "value": ""
            },
            {
                "id": "14cd32db-f0e7-4b78-9d75-a5d91b100fe8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.347648261758692,
                "y": 18.272506082725062,
                "width": 30,
                "value": ""
            },
            {
                "id": "5c876839-5ae2-4dfb-8e12-12d8e530ccaa",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.987730061349696,
                "y": 18.191403081914032,
                "width": 30,
                "value": ""
            },
            {
                "id": "9d7023a8-7c61-4de8-ac73-3890c59c053f",
                "type": "text",
                "label": "New text",
                "x": 64.90797546012269,
                "y": 24.841849148418493,
                "width": 21.615541922290387,
                "height": 5,
                "value": ""
            },
            {
                "id": "237c4dfa-2dc2-40c1-99b4-13a9768338d2",
                "type": "text",
                "label": "New text",
                "x": 46.40081799591002,
                "y": 24.679643146796433,
                "width": 17.934560327198362,
                "height": 4.91889699918897,
                "value": ""
            },
            {
                "id": "a516216d-b142-4a58-8683-d95ff0ed0605",
                "type": "text",
                "label": "New text",
                "x": 29.325153374233132,
                "y": 24.679643146796433,
                "width": 16.400817995910018,
                "height": 4.756690997566911,
                "value": ""
            },
            {
                "id": "8729b6b9-8813-4b3f-bdcd-179311dd9716",
                "type": "text",
                "label": "New text",
                "x": 14.192229038854807,
                "y": 24.598540145985403,
                "width": 14.45807770961145,
                "height": 4.756690997566911,
                "value": ""
            },
            {
                "id": "09637682-0ebb-4b61-8fac-362491f5b896",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.987730061349696,
                "y": 28.004866180048666,
                "width": 30,
                "value": ""
            },
            {
                "id": "d0c4e8bf-7b37-4561-a69b-0bf30b709929",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.783231083844584,
                "y": 26.220600162206004,
                "width": 30,
                "value": ""
            },
            {
                "id": "631451a6-2675-4f5b-b575-042605744fab",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 25.132924335378327,
                "y": 26.30170316301703,
                "width": 30,
                "value": ""
            },
            {
                "id": "40bb3702-f0b6-42e4-abba-141a9f7f6cac",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 34.02862985685072,
                "y": 26.382806163828064,
                "width": 30,
                "value": ""
            },
            {
                "id": "035932d9-3dad-4736-93c2-ffc010e64682",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.79959100204499,
                "y": 27.923763179237632,
                "width": 30,
                "value": ""
            },
            {
                "id": "bdfda0fb-55b5-4a3c-af85-2049822987eb",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.697341513292436,
                "y": 26.13949716139497,
                "width": 30,
                "value": ""
            },
            {
                "id": "2513acf6-3362-49c7-b399-a69d6e44eb6e",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.114519427402854,
                "y": 28.085969180859692,
                "width": 30,
                "value": ""
            },
            {
                "id": "e2b6839f-286a-464c-83b4-68550a14d561",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.012269938650306,
                "y": 26.13949716139497,
                "width": 30,
                "value": ""
            },
            {
                "id": "2126a49b-d1e8-431d-a831-25cd448235cd",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.19018404907976,
                "y": 26.626115166261155,
                "width": 30,
                "value": false
            },
            {
                "id": "08fa2561-06cb-48a4-a851-59440550258d",
                "type": "text",
                "label": "New text",
                "x": 22.57668711656442,
                "y": 28.004866180048666,
                "width": 19.366053169734148,
                "height": 4.756690997566911,
                "value": ""
            },
            {
                "id": "01da09b5-70ab-4544-b050-1c645b988eeb",
                "type": "text",
                "label": "New text",
                "x": 29.427402862985687,
                "y": 33.033252230332515,
                "width": 15.685071574642123,
                "height": 4.10786699107867,
                "value": ""
            },
            {
                "id": "34003769-08ee-43d4-aef9-1636321bead2",
                "type": "text",
                "label": "New text",
                "x": 46.29856850715747,
                "y": 33.03325223033252,
                "width": 18.445807770961142,
                "height": 5.08110300081103,
                "value": ""
            },
            {
                "id": "446a180a-2833-4224-a772-27fdc89a7407",
                "type": "text",
                "label": "New text",
                "x": 65.31697341513292,
                "y": 32.87104622871047,
                "width": 21.002044989775047,
                "height": 5.7299270072992705,
                "value": ""
            },
            {
                "id": "9a118450-082e-4b01-b762-1b75504e0eed",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 24.826175869120657,
                "y": 34.73641524736416,
                "width": 30,
                "value": ""
            },
            {
                "id": "f38601a9-9ab5-4f86-8b4d-be5ddb0cb772",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.680981595092026,
                "y": 36.601784266017845,
                "width": 30,
                "value": ""
            },
            {
                "id": "f557f264-cf1b-4b16-b761-6f3887bac730",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.783231083844584,
                "y": 34.73641524736416,
                "width": 30,
                "value": ""
            },
            {
                "id": "780716f2-b30d-440a-9d20-bca0f1ecfff0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.697341513292436,
                "y": 34.81751824817518,
                "width": 30,
                "value": ""
            },
            {
                "id": "93c6a7b0-a75c-4b7a-bc9f-158037f1f4a6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 34.02862985685072,
                "y": 34.81751824817518,
                "width": 30,
                "value": ""
            },
            {
                "id": "e2d1ccd8-e6a4-4116-846f-5c24bf16f45c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.697341513292436,
                "y": 36.277372262773724,
                "width": 30,
                "value": ""
            },
            {
                "id": "5554864a-268d-4add-8202-1bf53e8bfdbc",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.21676891615542,
                "y": 36.439578264395784,
                "width": 30,
                "value": ""
            },
            {
                "id": "62450984-5172-4da7-ad1c-4026c220eec5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.21676891615542,
                "y": 34.81751824817518,
                "width": 30,
                "value": ""
            },
            {
                "id": "9d585a02-a3e2-4b6e-949a-abbdee6359d6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.2924335378323,
                "y": 34.73641524736416,
                "width": 30,
                "value": ""
            },
            {
                "id": "fbccc543-0211-42b3-9965-498341c27fda",
                "type": "text",
                "label": "New text",
                "x": 65.1124744376278,
                "y": 41.54906731549066,
                "width": 21.308793456032717,
                "height": 4.837793998377941,
                "value": ""
            },
            {
                "id": "592301e3-9c17-4f4d-8cac-bf49791d14de",
                "type": "text",
                "label": "New text",
                "x": 46.29856850715747,
                "y": 41.792376317923754,
                "width": 18.139059304703476,
                "height": 4.756690997566911,
                "value": ""
            },
            {
                "id": "9ae26a8a-39f9-4b78-ad13-2b55186e36b9",
                "type": "text",
                "label": "New text",
                "x": 29.120654396728018,
                "y": 41.46796431467964,
                "width": 16.60531697341513,
                "height": 5.324412003244121,
                "value": ""
            },
            {
                "id": "08cb0b42-344f-454b-9e31-825504721c4f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 32.29038854805726,
                "y": 50.71370640713706,
                "width": 30,
                "value": ""
            },
            {
                "id": "ba719dc2-0da3-47c0-ba3d-0c5f0a1a9441",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.79959100204499,
                "y": 44.95539334955393,
                "width": 30,
                "value": ""
            },
            {
                "id": "c9b8a5a7-200c-47ab-b43c-39c175e03096",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.59509202453987,
                "y": 43.17112733171127,
                "width": 30,
                "value": ""
            },
            {
                "id": "44104ea7-194b-4766-840d-2525059206ba",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 33.92638036809816,
                "y": 43.33333333333333,
                "width": 30,
                "value": ""
            },
            {
                "id": "8c48c441-618c-4d97-b566-531fadb2454b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 24.928425357873213,
                "y": 43.2522303325223,
                "width": 30,
                "value": ""
            },
            {
                "id": "456a475a-de0f-4e25-a543-36304bace601",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.783231083844584,
                "y": 45.036496350364956,
                "width": 30,
                "value": ""
            },
            {
                "id": "54161697-c775-4a30-b2ae-f2316314d9cd",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.680981595092026,
                "y": 43.33333333333333,
                "width": 30,
                "value": ""
            },
            {
                "id": "733b9c3b-633c-472c-a8ff-31ff1c55c5ee",
                "type": "text",
                "label": "New text",
                "x": 22.47443762781186,
                "y": 45.11759935117599,
                "width": 20.184049079754597,
                "height": 5.16220600162206,
                "value": ""
            },
            {
                "id": "278ee31a-9cab-4383-aa33-a3c04e953a00",
                "type": "text",
                "label": "New text",
                "x": 22.372188139059308,
                "y": 36.601784266017845,
                "width": 19.775051124744376,
                "height": 5.243309002433091,
                "value": ""
            },
            {
                "id": "637ed628-cd23-4f14-91e5-16db101d6ad0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 32.188139059304696,
                "y": 48.84833738848337,
                "width": 30,
                "value": ""
            },
            {
                "id": "43a7b924-0f4a-4e1a-a2d9-5f2dc68571bf",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.012269938650306,
                "y": 44.95539334955393,
                "width": 30,
                "value": ""
            },
            {
                "id": "bea6e766-f2ed-43c4-ae9f-cbdbf2a05a40",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.21676891615542,
                "y": 43.2522303325223,
                "width": 30,
                "value": ""
            },
            {
                "id": "8afd434a-99ee-43b1-be65-2a6933f65d4d",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.19018404907976,
                "y": 43.57664233576642,
                "width": 30,
                "value": ""
            },
            {
                "id": "58f8c3da-b39e-4f01-902a-5712c8bde03f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 22.16768916155419,
                "y": 48.92944038929439,
                "width": 30,
                "value": ""
            },
            {
                "id": "7e805c1f-ecf8-4612-b01d-6ba1b803d1a7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 22.26993865030675,
                "y": 46.98296836982967,
                "width": 30,
                "value": ""
            },
            {
                "id": "5fd81036-26fc-413c-bfa7-4522529cebcc",
                "type": "text",
                "label": "New text",
                "x": 66.74846625766871,
                "y": 46.82076236820762,
                "width": 19.468302658486706,
                "height": 5.973236009732361,
                "value": ""
            },
            {
                "id": "c1d0144c-9bda-48cc-b5f6-53ef96e70189",
                "type": "text",
                "label": "New text",
                "x": 34.23312883435583,
                "y": 47.06407137064071,
                "width": 26.93251533742331,
                "height": 5.243309002433091,
                "value": ""
            },
            {
                "id": "8e8a5856-bd1e-44de-befc-45fce0b91b2b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.44989775051125,
                "y": 52.49797242497972,
                "width": 30,
                "value": ""
            },
            {
                "id": "1d63a2b4-7931-4ada-a706-284beecefcc6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 66.33946830265847,
                "y": 48.84833738848337,
                "width": 30,
                "value": ""
            },
            {
                "id": "db007f47-47d0-4773-9472-5d6519ece3a2",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.421267893660534,
                "y": 48.84833738848337,
                "width": 30,
                "value": ""
            },
            {
                "id": "58a29e7a-f469-4a96-b052-167ddf28c919",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.697341513292436,
                "y": 50.55150040551501,
                "width": 30,
                "value": ""
            },
            {
                "id": "9ef0ffa3-30d3-453b-8092-59de2740c173",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.697341513292436,
                "y": 48.60502838605028,
                "width": 30,
                "value": ""
            },
            {
                "id": "de5685cc-bad1-4265-8938-3131039bae22",
                "type": "text",
                "label": "New text",
                "x": 70.22494887525562,
                "y": 56.39091646390916,
                "width": 16.503067484662573,
                "height": 5.243309002433091,
                "value": ""
            },
            {
                "id": "05706b89-9634-46df-abf8-5e8062409eb5",
                "type": "text",
                "label": "New text",
                "x": 70.42944785276073,
                "y": 54.52554744525548,
                "width": 16.503067484662573,
                "height": 5.892133008921331,
                "value": ""
            },
            {
                "id": "24dffbd9-7fb1-4752-8365-765bb5d15800",
                "type": "text",
                "label": "New text",
                "x": 70.32719836400817,
                "y": 52.82238442822384,
                "width": 16.196319018404907,
                "height": 4.91889699918897,
                "value": ""
            },
            {
                "id": "2c4bcc6d-86bd-4751-af92-1f24de2f448b",
                "type": "text",
                "label": "New text",
                "x": 41.0838445807771,
                "y": 52.90348742903487,
                "width": 23.558282208588956,
                "height": 4.91889699918897,
                "value": ""
            },
            {
                "id": "6e498614-701c-4248-89ab-e4b1d2ceaec8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 50.1840490797546,
                "y": 56.228710462287104,
                "width": 30,
                "value": ""
            },
            {
                "id": "d678a53a-3163-42b4-a55e-d67366a74a89",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 43.537832310838446,
                "y": 56.30981346309814,
                "width": 30,
                "value": ""
            },
            {
                "id": "4a421294-cfdf-41d2-8954-c9bb003100bc",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 50.388548057259705,
                "y": 54.44444444444444,
                "width": 30,
                "value": ""
            },
            {
                "id": "352fe3f6-5649-433b-9d58-f17dac31e7a3",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 43.43558282208589,
                "y": 54.36334144363341,
                "width": 30,
                "value": ""
            },
            {
                "id": "7a065079-79b8-4f0b-bf11-95a661b029ec",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.783231083844584,
                "y": 56.39091646390916,
                "width": 30,
                "value": ""
            },
            {
                "id": "7fc938ff-e39f-4968-a86d-030b0c7e69e7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.885480572597139,
                "y": 54.28223844282238,
                "width": 30,
                "value": ""
            },
            {
                "id": "598eecaf-c2bf-4e69-b072-30709e366431",
                "type": "text",
                "label": "New text",
                "x": 46.605316973415135,
                "y": 58.094079480940785,
                "width": 15.991820040899793,
                "height": 5.243309002433091,
                "value": ""
            },
            {
                "id": "acdbfd02-d3ee-45a2-a5b7-d90a3b153554",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 39.141104294478524,
                "y": 60.12165450121654,
                "width": 30,
                "value": false
            },
            {
                "id": "c63515ba-2744-44c9-8ed0-ff61d20c5d21",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 31.983640081799592,
                "y": 59.878345498783446,
                "width": 30,
                "value": ""
            },
            {
                "id": "03a28bff-ab96-44a4-a095-9d9313bd5a70",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 24.826175869120657,
                "y": 60.12165450121654,
                "width": 30,
                "value": ""
            },
            {
                "id": "b1843525-6057-4068-854f-4c6ce70b8ccb",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 37.0961145194274,
                "y": 58.012976480129765,
                "width": 30,
                "value": ""
            },
            {
                "id": "79bbccf4-4a20-40fe-8cd3-6866d3c4d700",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 31.881390593047037,
                "y": 58.012976480129765,
                "width": 30,
                "value": ""
            },
            {
                "id": "ebc98341-08ee-4f4a-8922-1de2ddec3c0d",
                "type": "text",
                "label": "New text",
                "x": 52.12678936605316,
                "y": 60.12165450121654,
                "width": 9.959100204498975,
                "height": 5.56772100567721,
                "value": ""
            },
            {
                "id": "604f3184-5ec7-41ab-9dee-81a5ad1197fb",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 78.60940695296523,
                "y": 58.337388483373886,
                "width": 30,
                "value": ""
            },
            {
                "id": "4581f38e-fcab-4d56-9715-6f0a2f30208b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.0879345603272,
                "y": 58.094079480940785,
                "width": 30,
                "value": ""
            },
            {
                "id": "782656a3-c033-4669-82bc-8fe3bc36cfbc",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 69.71370143149284,
                "y": 59.79724249797243,
                "width": 30,
                "value": ""
            },
            {
                "id": "de285189-90f6-4753-b969-8e3b200706c6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 62.65848670756645,
                "y": 60.04055150040551,
                "width": 30,
                "value": ""
            },
            {
                "id": "313bfdd2-69c1-40f6-a948-d00abaf6a197",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 66.03271983640082,
                "y": 61.9059205190592,
                "width": 30,
                "value": ""
            },
            {
                "id": "f2afb627-0b84-41b5-b104-b79f5f995c5c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.114519427402854,
                "y": 61.824817518248175,
                "width": 30,
                "value": ""
            },
            {
                "id": "6cd2a2ba-c9f8-432a-b638-4161eebb8f8c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 46.40081799591002,
                "y": 61.9059205190592,
                "width": 30,
                "value": ""
            },
            {
                "id": "d3785571-2537-41c6-89a5-21bee46f5c9e",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 38.834355828220865,
                "y": 61.824817518248175,
                "width": 30,
                "value": false
            },
            {
                "id": "bd6632f4-7ce2-4ee7-8f47-101d67ad45c7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.143149284253578,
                "y": 61.987023519870235,
                "width": 30,
                "value": ""
            },
            {
                "id": "aaaef435-0eec-4c27-a138-099a02976a46",
                "type": "text",
                "label": "New text",
                "x": 31.370143149284257,
                "y": 64.50121654501217,
                "width": 53.006134969325146,
                "height": 4.756690997566911,
                "value": ""
            },
            {
                "id": "7c826b71-afbc-400b-a27c-94531645cf43",
                "type": "text",
                "label": "New text",
                "x": 49.16155419222903,
                "y": 67.74533657745336,
                "width": 34.49897750511247,
                "height": 5.56772100567721,
                "value": ""
            },
            {
                "id": "d02c5b3c-68a0-4ab8-902a-9a5656364638",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 62.45398773006134,
                "y": 69.36739659367396,
                "width": 30,
                "value": ""
            },
            {
                "id": "b4bfa764-5e82-4f92-8f1d-be5c6abdf1c6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 53.86503067484662,
                "y": 69.44849959448499,
                "width": 30,
                "value": ""
            },
            {
                "id": "f9c19f9c-5d84-4dd1-be21-b8b2153d04de",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 46.605316973415135,
                "y": 69.36739659367396,
                "width": 30,
                "value": ""
            },
            {
                "id": "20043b55-3596-40bf-97ef-79b7c98729b1",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 38.93660531697341,
                "y": 69.36739659367396,
                "width": 30,
                "value": ""
            },
            {
                "id": "4456d805-7ea4-462e-9f35-4e7b248e9d26",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 32.08588957055215,
                "y": 67.66423357664233,
                "width": 30,
                "value": ""
            },
            {
                "id": "57a12680-4dda-401d-ab78-819a99bdfd89",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 26.564417177914113,
                "y": 69.28629359286293,
                "width": 30,
                "value": ""
            },
            {
                "id": "6fc07259-1634-4925-986e-068cf28063c4",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 22.26993865030675,
                "y": 67.5831305758313,
                "width": 30,
                "value": ""
            },
            {
                "id": "52b68969-d7d6-43de-9e87-881fd0c42542",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.8834355828221,
                "y": 69.61070559610705,
                "width": 30,
                "value": ""
            },
            {
                "id": "1e237734-5674-4bcb-ad33-f14d3a32dbeb",
                "type": "textarea",
                "label": "New textarea",
                "x": 14.08997955010225,
                "y": 72.04379562043796,
                "width": 72.02453987730063,
                "height": 14.890510948905112,
                "value": ""
            },
            {
                "id": "91a3df97-e912-44b7-8b0b-e30405c758e9",
                "type": "signature",
                "label": "New signature",
                "x": 9.386503067484664,
                "y": 88.62124898427885,
                "width": 30,
                "value": ""
            },
            {
                "id": "e46aaadb-db33-47f9-9994-e9954a1d5b84",
                "type": "date",
                "label": "New date",
                "x": 75.43967280163598,
                "y": 91.83292781832928,
                "width": 30,
                "value": ""
            }
        ]
    },
    {
        id: 'storm-door',
        name: 'Storm Door',
        imagePath: '/forms/storm-door.png',
        defaultFields: [
            {
                "id": "a85eed38-e1fd-433a-846e-ebe7cd6e8d5c",
                "type": "text",
                "label": "New text",
                "x": 24.443084455324357,
                "y": 18.64406779661017,
                "width": 41.50550795593635,
                "height": 5.169491525423728,
                "value": ""
            },
            {
                "id": "6dc702c9-5a93-43f4-a209-53d0778da167",
                "type": "text",
                "label": "New text",
                "x": 78.17625458996329,
                "y": 15.847457627118644,
                "width": 13.10893512851897,
                "height": 5.084745762711865,
                "value": ""
            },
            {
                "id": "31d35d10-5f3d-47ff-b8c8-9fec1c018501",
                "type": "text",
                "label": "New text",
                "x": 64.7123623011016,
                "y": 21.01694915254237,
                "width": 26.695226438188495,
                "height": 5,
                "value": ""
            },
            {
                "id": "eebfb020-ff45-4e71-a691-eacd88fb4188",
                "type": "text",
                "label": "New text",
                "x": 20.281517747858015,
                "y": 30,
                "width": 30,
                "value": ""
            },
            {
                "id": "44987235-150c-4fc9-8e4a-31e452aa595e",
                "type": "text",
                "label": "New text",
                "x": 69.11872705018361,
                "y": 27.288135593220336,
                "width": 23.02325581395349,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "de5f6286-1828-457d-bb05-5bae39c9cbbb",
                "type": "text",
                "label": "New text",
                "x": 69.4859241126071,
                "y": 33.13559322033898,
                "width": 21.67686658506732,
                "height": 4.915254237288136,
                "value": ""
            },
            {
                "id": "469db27a-3621-40ee-ab72-c310acaf1cc0",
                "type": "text",
                "label": "New text",
                "x": 55.777233782129755,
                "y": 37.03389830508475,
                "width": 30,
                "value": ""
            },
            {
                "id": "f5c44306-b2f4-45dc-b54b-501bb1bbf93b",
                "type": "text",
                "label": "New text",
                "x": 20.281517747858015,
                "y": 42.11864406779661,
                "width": 30,
                "value": ""
            },
            {
                "id": "03b34252-b559-41d3-b272-1950fba077b6",
                "type": "text",
                "label": "New text",
                "x": 20.15911872705018,
                "y": 37.20338983050848,
                "width": 30,
                "value": ""
            },
            {
                "id": "bebbe26c-c47c-4f7e-a79a-c5a25494ea5d",
                "type": "text",
                "label": "New text",
                "x": 13.42717258261934,
                "y": 36.86440677966102,
                "width": 5.3977968176254585,
                "height": 6.101694915254238,
                "value": ""
            },
            {
                "id": "48afc20f-ef0b-466d-a8d9-71da867c1429",
                "type": "text",
                "label": "New text",
                "x": 14.651162790697676,
                "y": 27.11864406779661,
                "width": 3.6842105263157885,
                "height": 7.288135593220339,
                "value": ""
            },
            {
                "id": "a3ed6d02-8b82-42d8-ae4f-e55b79d7fbb0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.138310893512852,
                "y": 32.79661016949152,
                "width": 30,
                "value": ""
            },
            {
                "id": "11639308-dc18-4771-8ec4-04f3d9056e26",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.389228886168915,
                "y": 41.94915254237288,
                "width": 30,
                "value": ""
            },
            {
                "id": "096538eb-da8b-4b15-be37-9b9c4da56a4c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.38922888616891,
                "y": 39.32203389830509,
                "width": 30,
                "value": ""
            },
            {
                "id": "46a969b6-6524-4bec-9860-0387e7f79fd0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 77.56425948592411,
                "y": 23.135593220338983,
                "width": 30,
                "value": ""
            },
            {
                "id": "b873a830-2ca5-47e7-8717-89aa59e1bde4",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 64.34516523867809,
                "y": 23.389830508474578,
                "width": 30,
                "value": ""
            },
            {
                "id": "5b0c3af9-9467-4f4e-94f2-64983ff51ae0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 54.308445532435734,
                "y": 23.220338983050848,
                "width": 30,
                "value": ""
            },
            {
                "id": "b2666170-da3e-4614-9aa9-ddfad6803a4c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 36.56058751529987,
                "y": 23.389830508474578,
                "width": 30,
                "value": ""
            },
            {
                "id": "72e9275d-3d0e-4c66-a33a-ca23be46ac51",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.38310893512852,
                "y": 23.220338983050848,
                "width": 30,
                "value": ""
            },
            {
                "id": "86c5ad0f-0664-4d71-974c-0c48178cbe79",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.26070991432068,
                "y": 27.033898305084747,
                "width": 30,
                "value": ""
            },
            {
                "id": "512ec2f8-1c15-4771-a2c6-e9aa5be4ae90",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 47.69889840881273,
                "y": 20.847457627118644,
                "width": 30,
                "value": ""
            },
            {
                "id": "66ba1c38-455d-4c36-89ba-33ece684deac",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 38.88616891064871,
                "y": 20.93220338983051,
                "width": 30,
                "value": ""
            },
            {
                "id": "7227eaa2-ac2a-49a0-930d-bc2b12d51e7c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 29.951040391676862,
                "y": 20.93220338983051,
                "width": 30,
                "value": ""
            },
            {
                "id": "d5d1dbf4-ae48-4099-865a-76ca742f4bf3",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.26070991432068,
                "y": 20.847457627118644,
                "width": 30,
                "value": ""
            },
            {
                "id": "12b66ea4-cc19-4df0-ac45-7a63149f0bd3",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 29.951040391676862,
                "y": 32.79661016949154,
                "width": 30,
                "value": ""
            },
            {
                "id": "56858b7b-5c75-43f6-a9ed-10101c6bb150",
                "type": "textarea",
                "label": "New textarea",
                "x": 9.020807833537333,
                "y": 44.32203389830509,
                "width": 81.22399020807833,
                "height": 10.254237288135592,
                "value": ""
            },
            {
                "id": "5981b7ae-1d1d-4bbd-8a9c-008d2de37ea2",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 47.69889840881273,
                "y": 55.33898305084746,
                "width": 30,
                "value": ""
            },
            {
                "id": "3312ca51-1cad-463b-a2db-6ff6af6687b2",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 38.88616891064871,
                "y": 55.33898305084746,
                "width": 30,
                "value": ""
            },
            {
                "id": "1b147cdf-775e-4d42-8236-0adcd0e920ce",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.0734394124847,
                "y": 55.16949152542373,
                "width": 30,
                "value": ""
            },
            {
                "id": "b968ca16-be59-47f6-b431-d34e76b91696",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.26070991432068,
                "y": 55.254237288135585,
                "width": 30,
                "value": ""
            },
            {
                "id": "89d8cd0e-f2ea-453e-8cc9-fd5d8263d9fe",
                "type": "text",
                "label": "New text",
                "x": 64.7123623011016,
                "y": 55.50847457627118,
                "width": 26.083231334149325,
                "height": 5.508474576271186,
                "value": ""
            },
            {
                "id": "b6733444-1d49-47c7-a591-a629de0145e3",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 75.11627906976744,
                "y": 57.711864406779654,
                "width": 30,
                "value": ""
            },
            {
                "id": "8cd5d422-6d87-42e6-af2e-8aae99c9e64a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 58.71481028151775,
                "y": 57.6271186440678,
                "width": 30,
                "value": ""
            },
            {
                "id": "10c2711b-d6ef-4263-a31e-9b26872a7182",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 47.821297429620564,
                "y": 57.6271186440678,
                "width": 30,
                "value": ""
            },
            {
                "id": "829a3a44-3f6b-4101-94eb-73ab0461db57",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 34.479804161566705,
                "y": 57.54237288135593,
                "width": 30,
                "value": ""
            },
            {
                "id": "4facb855-f271-4181-b478-cf031aaf8ee0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.138310893512852,
                "y": 57.54237288135593,
                "width": 30,
                "value": ""
            },
            {
                "id": "c061618a-9887-4701-8b52-6037894a2c28",
                "type": "text",
                "label": "New text",
                "x": 14.773561811505509,
                "y": 60,
                "width": 3.1946144430844545,
                "height": 6.186440677966102,
                "value": ""
            },
            {
                "id": "767880bd-2212-44eb-92c6-a04d2148b1d6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.0734394124847,
                "y": 59.91525423728814,
                "width": 30,
                "value": ""
            },
            {
                "id": "b391e724-db77-4ef8-85fc-341221bcda78",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.138310893512852,
                "y": 60.08474576271187,
                "width": 30,
                "value": ""
            },
            {
                "id": "f3066405-dc89-4d1f-a111-4a1aa0b074ec",
                "type": "text",
                "label": "New text",
                "x": 68.99632802937577,
                "y": 60.08474576271187,
                "width": 22.166462668298653,
                "height": 5.338983050847458,
                "value": ""
            },
            {
                "id": "4df33ff1-4d27-4cfc-9016-c11d16a2c199",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 79.52264381884946,
                "y": 62.20338983050847,
                "width": 30,
                "value": ""
            },
            {
                "id": "b2af59b6-1b44-4d5f-830d-3f331877d074",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 70.83231334149328,
                "y": 62.28813559322034,
                "width": 30,
                "value": ""
            },
            {
                "id": "4149a7ba-37b2-4ebf-b13b-a5a81b2a5699",
                "type": "text",
                "label": "New text",
                "x": 20.771113831089348,
                "y": 62.881355932203384,
                "width": 30,
                "value": ""
            },
            {
                "id": "793b0b72-f405-4098-9c52-4f57741468c8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.0734394124847,
                "y": 65.42372881355932,
                "width": 30,
                "value": ""
            },
            {
                "id": "f92decdb-f6b3-4e8d-a551-4b2e16f76679",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.138310893512852,
                "y": 65.42372881355932,
                "width": 30,
                "value": ""
            },
            {
                "id": "feefcb65-c89d-4da1-98d6-3788a1ddd78b",
                "type": "text",
                "label": "New text",
                "x": 69.4859241126071,
                "y": 65.84745762711864,
                "width": 21.432068543451653,
                "height": 5.508474576271186,
                "value": ""
            },
            {
                "id": "c56c01fd-8cc2-4826-a1fc-79f32979bd69",
                "type": "text",
                "label": "New text",
                "x": 13.427172582619336,
                "y": 69.83050847457626,
                "width": 5.152998776009792,
                "height": 7.5423728813559325,
                "value": ""
            },
            {
                "id": "20d4c4bc-905f-4038-9873-3a630885677e",
                "type": "text",
                "label": "New text",
                "x": 20.771113831089348,
                "y": 74.91525423728814,
                "width": 30,
                "value": ""
            },
            {
                "id": "0bf581a8-9c69-4fd8-a881-b0f89e127adb",
                "type": "text",
                "label": "New text",
                "x": 55.53243574051409,
                "y": 69.91525423728814,
                "width": 30,
                "value": ""
            },
            {
                "id": "9ce1a4a8-2c03-4d6a-8493-a1e52f27d9d6",
                "type": "text",
                "label": "New text",
                "x": 20.893512851897185,
                "y": 69.91525423728814,
                "width": 30,
                "value": ""
            },
            {
                "id": "ebf9993a-41d3-4714-9efe-435215aab8af",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.634026927784575,
                "y": 74.66101694915255,
                "width": 30,
                "value": ""
            },
            {
                "id": "bb303a5b-a98c-4622-aeb7-2e96d732cd10",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.634026927784575,
                "y": 72.03389830508475,
                "width": 30,
                "value": ""
            },
            {
                "id": "f2ce6342-e7ed-44f4-965e-b2d141ed62f7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 79.76744186046513,
                "y": 29.745762711864405,
                "width": 30,
                "value": ""
            },
            {
                "id": "e1e8309b-8c77-4aab-8a66-48a549551969",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 70.95471236230111,
                "y": 29.66101694915254,
                "width": 30,
                "value": ""
            },
            {
                "id": "240a780d-fbc2-4c1e-abc7-337f176b8dfd",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 68.75152998776011,
                "y": 18.135593220338983,
                "width": 30,
                "value": ""
            },
            {
                "id": "b65d2cb9-0f6f-47c3-8668-fc4425173f0c",
                "type": "textarea",
                "label": "New textarea",
                "x": 9.020807833537333,
                "y": 77.20338950722905,
                "width": 81.71358629130967,
                "height": 10.254237288135592,
                "value": ""
            },
            {
                "id": "1388846c-3c87-4fae-a9cf-7e27d9b0b3d8",
                "type": "signature",
                "label": "New signature",
                "x": 6.695226438188495,
                "y": 88.86440665034925,
                "width": 30,
                "value": ""
            },
            {
                "id": "cb30c3b3-8a15-479b-97b0-9e0996c25230",
                "type": "date",
                "label": "New date",
                "x": 74.13708690330478,
                "y": 91.61016949152541,
                "width": 30,
                "value": ""
            }
        ]
    },
    {
        id: 'windows',
        name: 'Windows',
        imagePath: '/forms/windows.png',
        defaultFields: [
            {
                "id": "a5778a12-8e74-4eb3-a9d7-cc419224edbd",
                "type": "text",
                "label": "New text",
                "x": 20.036719706242348,
                "y": 20,
                "width": 38.20073439412485,
                "height": 5,
                "value": ""
            },
            {
                "id": "56e1ddcf-fa68-49a7-9ae0-f490846bdd7d",
                "type": "text",
                "label": "New text",
                "x": 77.56425948592411,
                "y": 19.830508474576273,
                "width": 14.822521419828641,
                "height": 5.2542372881355925,
                "value": ""
            },
            {
                "id": "c5c77cbf-09b1-4376-8679-44c13b72058f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.614443084455325,
                "y": 24.23728813559322,
                "width": 30,
                "value": ""
            },
            {
                "id": "0f214810-72fd-4fc1-b806-5d696e658c4f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 51.00367197062423,
                "y": 22.118644067796613,
                "width": 30,
                "value": ""
            },
            {
                "id": "3449b073-225a-4f53-8150-07c9b5b208cc",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 36.070991432068546,
                "y": 22.203389830508474,
                "width": 30,
                "value": ""
            },
            {
                "id": "015c1d29-f34b-4928-8c74-ce903b0cc54b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.15911872705018,
                "y": 22.203389830508474,
                "width": 30,
                "value": ""
            },
            {
                "id": "bb8e7685-42c4-492e-8e35-1c9c073b2b20",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.492044063647492,
                "y": 22.033898305084744,
                "width": 30,
                "value": ""
            },
            {
                "id": "de3a013f-8125-42c7-a230-f6f0500c660c",
                "type": "text",
                "label": "New text",
                "x": 41.57894736842105,
                "y": 24.491525423728813,
                "width": 26.20563035495716,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "6b69b15b-b4db-442b-8f42-ba2d9dabd904",
                "type": "text",
                "label": "New text",
                "x": 14.773561811505505,
                "y": 24.576271186440678,
                "width": 19.35128518971848,
                "height": 5,
                "value": ""
            },
            {
                "id": "f7481f1e-f20d-4ff9-ba0d-2eac5f5e94c2",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 69.97552019583844,
                "y": 24.322033898305083,
                "width": 30,
                "value": ""
            },
            {
                "id": "1098d459-3fe0-4828-a770-3686f886b3f9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 69.85312117503061,
                "y": 22.118644067796613,
                "width": 30,
                "value": ""
            },
            {
                "id": "1a90c7b0-3d79-4fc7-acab-0cb86de11f0f",
                "type": "text",
                "label": "New text",
                "x": 56.26682986536108,
                "y": 32.28813559322034,
                "width": 3.4394124847001217,
                "height": 7.033898305084746,
                "value": ""
            },
            {
                "id": "fa78e3b8-6dc9-41aa-8bd2-61dc91b55277",
                "type": "text",
                "label": "New text",
                "x": 63.24357405140759,
                "y": 28.559322033898304,
                "width": 3.1946144430844545,
                "height": 6.271186440677965,
                "value": ""
            },
            {
                "id": "c5c21d90-fc03-4489-bba0-5933ed9bb25c",
                "type": "text",
                "label": "New text",
                "x": 50.881272949816406,
                "y": 30.42372881355932,
                "width": 3.9290085679314557,
                "height": 6.525423728813559,
                "value": ""
            },
            {
                "id": "e1e6e239-5426-440e-95c1-99f3c61f4fda",
                "type": "text",
                "label": "New text",
                "x": 51.00367197062423,
                "y": 28.559322033898304,
                "width": 3.4394124847001217,
                "height": 7.457627118644068,
                "value": ""
            },
            {
                "id": "1f802c30-39c6-41d7-ac33-41693a163d5e",
                "type": "text",
                "label": "New text",
                "x": 33.62301101591187,
                "y": 33.98305084745763,
                "width": 3.4394124847001217,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "c8972ab4-19bf-4cb4-97d5-cd521947d7aa",
                "type": "text",
                "label": "New text",
                "x": 29.094247246022032,
                "y": 32.11864406779661,
                "width": 2.7050183598531206,
                "height": 7.796610169491526,
                "value": ""
            },
            {
                "id": "d37a85be-cd32-400b-a606-60449fe13443",
                "type": "text",
                "label": "New text",
                "x": 35.94859241126071,
                "y": 28.474576271186443,
                "width": 3.3170134638922883,
                "height": 7.203389830508475,
                "value": ""
            },
            {
                "id": "814d605f-49fa-48bc-bbeb-9fb845771543",
                "type": "text",
                "label": "New text",
                "x": 4.492044063647492,
                "y": 33.98305084745763,
                "width": 3.9290085679314557,
                "height": 6.525423728813559,
                "value": ""
            },
            {
                "id": "7930884f-b3eb-4290-a23f-2a498b0d4ff6",
                "type": "text",
                "label": "New text",
                "x": 4.492044063647492,
                "y": 32.20338983050847,
                "width": 3.9290085679314557,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "dc396c94-ea75-4cca-b07f-ddfab9d21e81",
                "type": "text",
                "label": "New text",
                "x": 4.369645042839657,
                "y": 30.42372881355932,
                "width": 4.0514075887392895,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "09e342d2-0c49-4768-b0e6-c2fc4499cdb3",
                "type": "text",
                "label": "New text",
                "x": 4.736842105263158,
                "y": 28.474576271186443,
                "width": 3.3170134638922875,
                "height": 5.169491525423728,
                "value": ""
            },
            {
                "id": "c111fe05-8cd3-436e-ba8a-5b68aef50769",
                "type": "text",
                "label": "New text",
                "x": 68.01713586291311,
                "y": 33.98305084745763,
                "width": 24.247246022031824,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "3a5195a7-67c5-469e-ae84-e4d3dee229b4",
                "type": "text",
                "label": "New text",
                "x": 11.468788249694002,
                "y": 39.74576271186441,
                "width": 3.3170134638922883,
                "height": 7.457627118644068,
                "value": ""
            },
            {
                "id": "24253a9b-39c2-4929-949e-43cc6ee457f8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 6.695226438188495,
                "y": 46.016949152542374,
                "width": 30,
                "value": ""
            },
            {
                "id": "1451d53b-c199-4114-b01e-d02c3bf39c79",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 6.817625458996329,
                "y": 44.06779661016949,
                "width": 30,
                "value": ""
            },
            {
                "id": "d3b44162-4e9c-4628-9024-f467db88d291",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.614443084455325,
                "y": 41.779661016949156,
                "width": 30,
                "value": ""
            },
            {
                "id": "9e866acc-a686-42b6-a4aa-613d91d977ba",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.492044063647492,
                "y": 37.79661016949152,
                "width": 30,
                "value": ""
            },
            {
                "id": "f9aeba1c-5bb6-4fe5-a7fb-ca2fb3b482f4",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 45.98531211750306,
                "y": 45.847457627118644,
                "width": 30,
                "value": ""
            },
            {
                "id": "c8deb94e-eb0b-441d-b3c6-009734fd3577",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 45.98531211750306,
                "y": 43.898305084745765,
                "width": 30,
                "value": ""
            },
            {
                "id": "a6e0d99c-cd8c-4291-a124-8933b145c8bf",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.33414932680539,
                "y": 39.66101694915255,
                "width": 30,
                "value": ""
            },
            {
                "id": "9f0bbfe9-eb55-441b-b98d-159a10004d83",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.211750305997555,
                "y": 37.54237288135593,
                "width": 30,
                "value": ""
            },
            {
                "id": "3cd77d9a-0f39-4299-928a-eacf955f1c56",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.15911872705018,
                "y": 46.016949152542374,
                "width": 30,
                "value": ""
            },
            {
                "id": "2b875383-f287-4c1f-868a-f06efd5c2a17",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.15911872705018,
                "y": 43.983050847457626,
                "width": 30,
                "value": ""
            },
            {
                "id": "d1dc15a5-9d31-41b2-9287-bfad8effa542",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.15911872705018,
                "y": 41.94915254237288,
                "width": 30,
                "value": ""
            },
            {
                "id": "71037d12-4d18-4d5f-9436-55a01e9b453a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 19.914320685434515,
                "y": 39.66101694915255,
                "width": 30,
                "value": ""
            },
            {
                "id": "9a55abb4-f072-4e96-8866-517bddb936c5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 19.914320685434515,
                "y": 37.6271186440678,
                "width": 30,
                "value": ""
            },
            {
                "id": "e951b813-e307-4e4a-a5e5-b1e54fbc9fa5",
                "type": "text",
                "label": "New text",
                "x": 39.37576499388005,
                "y": 41.779661016949156,
                "width": 16.16891064871481,
                "height": 5.338983050847458,
                "value": ""
            },
            {
                "id": "2541b6b8-3b5a-4c15-9a24-2d1eb3e74cc9",
                "type": "text",
                "label": "New text",
                "x": 70.5875152998776,
                "y": 37.6271186440678,
                "width": 21.432068543451653,
                "height": 5.932203389830509,
                "value": ""
            },
            {
                "id": "d057a612-a327-404c-8a77-a4076a91d5e8",
                "type": "text",
                "label": "New text",
                "x": 58.71481028151775,
                "y": 37.88135593220339,
                "width": 3.4394124847001217,
                "height": 7.88135593220339,
                "value": ""
            },
            {
                "id": "82f0ed16-6957-4130-b74d-ee765c3117e6",
                "type": "text",
                "label": "New text",
                "x": 75.60587515299878,
                "y": 48.47457627118644,
                "width": 16.658506731946144,
                "height": 5.508474576271186,
                "value": ""
            },
            {
                "id": "38fea94f-3d16-4a88-8ea5-1b5eb824e240",
                "type": "text",
                "label": "New text",
                "x": 75.48347613219096,
                "y": 45.932203389830505,
                "width": 16.90330477356181,
                "height": 6.271186440677965,
                "value": ""
            },
            {
                "id": "908c8875-9aab-405e-a4a9-67adcbc0ae4f",
                "type": "text",
                "label": "New text",
                "x": 75.48347613219096,
                "y": 43.813559322033896,
                "width": 17.148102815177477,
                "height": 5.338983050847458,
                "value": ""
            },
            {
                "id": "1e9090d5-4c35-4509-bee0-62bfd0acdb7b",
                "type": "text",
                "label": "New text",
                "x": 75.97307221542228,
                "y": 41.69491525423729,
                "width": 16.291309669522644,
                "height": 6.271186440677965,
                "value": ""
            },
            {
                "id": "ae7ee27f-ab3d-405f-ad09-c2947b4ae41c",
                "type": "text",
                "label": "New text",
                "x": 56.756425948592415,
                "y": 41.779661016949156,
                "width": 18.24969400244798,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "1efa26e1-803f-4e9f-bdb3-619eae01b8e0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 58.59241126070991,
                "y": 50.42372881355932,
                "width": 30,
                "value": ""
            },
            {
                "id": "b27b30ab-70d9-4acd-b666-3948657c1f51",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 58.71481028151775,
                "y": 48.559322033898304,
                "width": 30,
                "value": ""
            },
            {
                "id": "8c53a106-ea10-4a63-a872-cb558b1c2b48",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 58.59241126070991,
                "y": 43.898305084745765,
                "width": 30,
                "value": ""
            },
            {
                "id": "aef13010-9bf5-45bf-b838-26c4ade337c6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.17870257037944,
                "y": 50.16949152542372,
                "width": 30,
                "value": ""
            },
            {
                "id": "d471f255-66d2-496f-8444-dff3bc9f9c35",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 16.854345165238676,
                "y": 48.559322033898304,
                "width": 30,
                "value": ""
            },
            {
                "id": "bea43c77-b0a4-4a9f-9d03-4ebb4b7f1c04",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.492044063647492,
                "y": 48.728813559322035,
                "width": 30,
                "value": ""
            },
            {
                "id": "8b153634-71ae-4c8f-b5df-cb2550689131",
                "type": "text",
                "label": "New text",
                "x": 23.83108935128519,
                "y": 50.42372881355932,
                "width": 30,
                "value": ""
            },
            {
                "id": "b5c2f819-00a1-4acc-a3bd-e93cfe92b1a1",
                "type": "text",
                "label": "New text",
                "x": 87.35618115055081,
                "y": 52.71186440677966,
                "width": 3.4394124847001217,
                "height": 5.762711864406779,
                "value": ""
            },
            {
                "id": "a448981a-8e63-4aea-895a-2f204d28a0ba",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 84.90820073439413,
                "y": 55.16949152542373,
                "width": 30,
                "value": ""
            },
            {
                "id": "e530862e-d067-4c47-908b-6b8de91f3a36",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 77.93145654834763,
                "y": 55.08474576271186,
                "width": 30,
                "value": ""
            },
            {
                "id": "02ae837d-d9c9-4b61-952e-bf60c9403672",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 70.22031823745411,
                "y": 52.71186440677966,
                "width": 30,
                "value": ""
            },
            {
                "id": "848b8bd0-ec93-44fb-ab31-3c1a21b6d34f",
                "type": "text",
                "label": "New text",
                "x": 41.57894736842105,
                "y": 55.67796610169492,
                "width": 13.965728274173806,
                "height": 5.508474576271186,
                "value": ""
            },
            {
                "id": "8a22e4ec-a66e-4253-b368-5d3e558180ba",
                "type": "text",
                "label": "New text",
                "x": 39.37576499388005,
                "y": 53.22033898305085,
                "width": 14.332925336597308,
                "height": 5.677966101694915,
                "value": ""
            },
            {
                "id": "2434654e-e64a-4d9b-a9ed-1cf8c17d0553",
                "type": "text",
                "label": "New text",
                "x": 19.42472460220318,
                "y": 55.42372881355932,
                "width": 14.822521419828641,
                "height": 5.677966101694915,
                "value": ""
            },
            {
                "id": "5537f338-af06-4c66-b6ba-2b316d68fa21",
                "type": "text",
                "label": "New text",
                "x": 43.90452876376989,
                "y": 72.20338983050848,
                "width": 24.247246022031824,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "ee1fac38-bbc4-4d2b-a6e1-a22750df8433",
                "type": "text",
                "label": "New text",
                "x": 44.02692778457772,
                "y": 70.25423728813558,
                "width": 24.002447980416157,
                "height": 5.762711864406779,
                "value": ""
            },
            {
                "id": "2803b7a4-2b6b-4df0-9e2d-33aec6e35469",
                "type": "text",
                "label": "New text",
                "x": 70.34271725826194,
                "y": 63.813559322033896,
                "width": 22.166462668298653,
                "height": 5.8474576271186445,
                "value": ""
            },
            {
                "id": "759a6153-f608-4f60-b425-f494bf2dc092",
                "type": "text",
                "label": "New text",
                "x": 70.46511627906978,
                "y": 61.694915254237294,
                "width": 22.04406364749082,
                "height": 5.8474576271186445,
                "value": ""
            },
            {
                "id": "d6d7d5ee-1d9f-44ea-9aa0-853b4f90c556",
                "type": "text",
                "label": "New text",
                "x": 33.745410036719704,
                "y": 65.93220338983052,
                "width": 17.637698898408814,
                "height": 5.338983050847458,
                "value": ""
            },
            {
                "id": "65d4e060-8cbc-4c00-9509-9df4a4e6c0bd",
                "type": "text",
                "label": "New text",
                "x": 33.62301101591187,
                "y": 63.813559322033896,
                "width": 18.24969400244798,
                "height": 5.084745762711865,
                "value": ""
            },
            {
                "id": "54083c5f-af22-4b66-96cc-6736cffac38f",
                "type": "text",
                "label": "New text",
                "x": 33.86780905752754,
                "y": 61.610169491525426,
                "width": 17.637698898408814,
                "height": 5.508474576271186,
                "value": ""
            },
            {
                "id": "62c3323d-5fe0-470f-9ab3-4799bc9b0d8f",
                "type": "text",
                "label": "New text",
                "x": 63.6107711138311,
                "y": 57.45762711864407,
                "width": 13.231334149326804,
                "height": 6.3559322033898304,
                "value": ""
            },
            {
                "id": "d7901f1b-0b66-4f3a-ad7b-fad321e3957e",
                "type": "text",
                "label": "New text",
                "x": 4.614443084455325,
                "y": 59.66101694915255,
                "width": 16.046511627906977,
                "height": 5.8474576271186445,
                "value": ""
            },
            {
                "id": "230af23e-8c85-46ca-b1c6-b29ff5e15d1b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 16.731946144430843,
                "y": 63.559322033898304,
                "width": 30,
                "value": ""
            },
            {
                "id": "a6d4b07c-3801-4e0b-8111-b7e7c80c1f18",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 16.60954712362301,
                "y": 61.52542372881356,
                "width": 30,
                "value": ""
            },
            {
                "id": "f3b0aa50-3a93-4470-849a-6d3b90f43982",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.492044063647492,
                "y": 63.64406779661017,
                "width": 30,
                "value": ""
            },
            {
                "id": "d972d9fc-1493-4875-8b8a-dea179d92083",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.369645042839657,
                "y": 61.52542372881356,
                "width": 30,
                "value": ""
            },
            {
                "id": "a15af13d-1437-41d6-a649-200a8d18e354",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 28.9718482252142,
                "y": 59.40677966101695,
                "width": 30,
                "value": ""
            },
            {
                "id": "6d05691b-3a89-4eeb-a63d-444139ce2e90",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 22.974296205630353,
                "y": 59.237288135593225,
                "width": 30,
                "value": ""
            },
            {
                "id": "67bd5d4f-835f-4339-96f6-115c7f81a981",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 26.64626682986536,
                "y": 67.71186440677967,
                "width": 30,
                "value": ""
            },
            {
                "id": "4040e283-48c6-4280-a7c0-2825b96de5c5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 16.487148102815176,
                "y": 67.96610169491527,
                "width": 30,
                "value": ""
            },
            {
                "id": "3e412efd-8983-4876-a4bf-cdf0ef79509c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.036719706242348,
                "y": 71.86440677966101,
                "width": 30,
                "value": ""
            },
            {
                "id": "a769faf8-177d-40c9-87ef-88ca9d0e743f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.036719706242348,
                "y": 70,
                "width": 30,
                "value": ""
            },
            {
                "id": "f815488b-8cad-4aa4-8b21-e98c056a6100",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.247246022031824,
                "y": 72.03389830508475,
                "width": 30,
                "value": ""
            },
            {
                "id": "ecb85a5c-98de-4574-b532-51e5a207589b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.492044063647492,
                "y": 70,
                "width": 30,
                "value": ""
            },
            {
                "id": "79f5e14c-0cce-4d4a-8932-b14f3116cff9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.247246022031822,
                "y": 66.10169491525424,
                "width": 30,
                "value": ""
            },
            {
                "id": "b0b4af15-47c8-4681-8fc5-77a768dbaf1b",
                "type": "text",
                "label": "New text",
                "x": 16.487148102815176,
                "y": 66.01694915254237,
                "width": 3.6842105263157885,
                "height": 6.9491525423728815,
                "value": ""
            },
            {
                "id": "b7146933-f229-4366-a9ec-fb7e8a9eb201",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 38.88616891064871,
                "y": 67.71186440677967,
                "width": 30,
                "value": ""
            },
            {
                "id": "2f3b0c79-2eb5-4b88-b5d4-c88cdc4f553c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 80.25703794369645,
                "y": 65.84745762711864,
                "width": 30,
                "value": ""
            },
            {
                "id": "c47095d4-9433-4b93-89b4-40c5ca4908eb",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 70.09791921664628,
                "y": 72.11864406779661,
                "width": 30,
                "value": ""
            },
            {
                "id": "d0f23418-6469-42e0-8167-d293b78f254f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 69.97552019583844,
                "y": 70.08474576271186,
                "width": 30,
                "value": ""
            },
            {
                "id": "84b6495c-161a-47f7-969d-e6537c1afa04",
                "type": "text",
                "label": "New text",
                "x": 70.46511627906978,
                "y": 68.05084745762711,
                "width": 21.67686658506732,
                "height": 5.932203389830509,
                "value": ""
            },
            {
                "id": "27dc3444-7c69-4727-8803-e57cd8e2b335",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 43.65973072215422,
                "y": 57.711864406779654,
                "width": 30,
                "value": ""
            },
            {
                "id": "a1fb5012-1684-45c5-9317-73881c7ca626",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 77.93145654834763,
                "y": 57.79661016949152,
                "width": 30,
                "value": ""
            },
            {
                "id": "7ccf2d5c-c920-4f58-8c5c-79bf464df762",
                "type": "textarea",
                "label": "New textarea",
                "x": 4.369645042839657,
                "y": 74.49152542372882,
                "width": 87.46634026927785,
                "height": 13.474576271186441,
                "value": ""
            },
            {
                "id": "42b1e213-97d6-4b1b-af8f-8484d5a1de99",
                "type": "signature",
                "label": "New signature",
                "x": 6.817625458996328,
                "y": 89.66101694915254,
                "width": 30,
                "value": ""
            },
            {
                "id": "e7c2ed41-1f9a-4288-b459-01d1b29cca6f",
                "type": "date",
                "label": "New date",
                "x": 74.13708690330478,
                "y": 91.61016949152543,
                "width": 30,
                "value": ""
            }
        ]
    },
];
