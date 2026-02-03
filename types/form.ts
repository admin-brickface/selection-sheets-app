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
                "x": 23.942331288343556,
                "y": 29.190233167899613,
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
                "y": 38.77282517089615,
                "width": 27.05521472392638,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "51aa8db9-c2d2-4469-b950-09cd6d54398a",
                "type": "text",
                "label": "New text",
                "x": 67.17791411042946,
                "y": 38.59701282891657,
                "width": 25.828220858895705,
                "height": 5,
                "value": ""
            },
            {
                "id": "fd7b0e5c-fd78-4874-81ee-807960c418ca",
                "type": "text",
                "label": "New text",
                "x": 77.36196319018404,
                "y": 41.1080157318101,
                "width": 16.380368098159508,
                "height": 5.762711864406779,
                "value": ""
            },
            {
                "id": "21f45174-e96c-4594-84a1-72bae47c5f60",
                "type": "text",
                "label": "New text",
                "x": 23.22883435582822,
                "y": 41.20844648375316,
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
                "y": 46.51605955613822,
                "width": 30,
                "value": ""
            },
            {
                "id": "5f60661c-2d1d-4be3-bb46-504bbf792207",
                "type": "text",
                "label": "New text",
                "x": 67.32331288343558,
                "y": 43.782189343571495,
                "width": 26.68711656441718,
                "height": 5,
                "value": ""
            },
            {
                "id": "c50e8a5e-10c2-4ec4-bede-cea236f6769d",
                "type": "text",
                "label": "New text",
                "x": 67.05521472392638,
                "y": 46.42499297687049,
                "width": 26.68711656441718,
                "height": 5.677966101694915,
                "value": ""
            },
            {
                "id": "78061dbd-f97d-4851-bc58-2e5c8d12cf14",
                "type": "text",
                "label": "New text",
                "x": 29.041104294478526,
                "y": 49.32203389830509,
                "width": 30,
                "value": ""
            },
            {
                "id": "912463c0-fd1a-40c4-8e3f-a972d2648987",
                "type": "text",
                "label": "New text",
                "x": 31.372392638036818,
                "y": 53.65038861316602,
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
                "y": 54.205918157130824,
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
                "x": 23.919631901840493,
                "y": 23.210974810375497,
                "width": 30,
                "value": ""
            },
            {
                "id": "9eafc0ac-f6b6-4a27-86ee-a2560522718f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.942331288343556,
                "y": 25.037690795018264,
                "width": 30,
                "value": ""
            },
            {
                "id": "1fc229d0-494f-4522-a3cf-804336e8d664",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 45.00122699386503,
                "y": 23.17328401535724,
                "width": 30,
                "value": false
            },
            {
                "id": "ff5c6a4c-ccad-4c35-8d22-411ded7b8ff5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 45.02392638036811,
                "y": 24.9529450323064,
                "width": 30,
                "value": false
            },
            {
                "id": "785df539-f506-4f4f-a19c-6a0faa56c4b9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 69.19570552147239,
                "y": 23.204653993819647,
                "width": 30,
                "value": ""
            },
            {
                "id": "6c8060f2-1a8d-4715-8091-6fb89f90a4c4",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 69.19570552147239,
                "y": 24.9686300215376,
                "width": 30,
                "value": ""
            },
            {
                "id": "17352298-778a-4d9f-ad3a-24a0e15aae7c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 69.19570552147239,
                "y": 18.342775540780973,
                "width": 30,
                "value": ""
            },
            {
                "id": "017f2412-6b19-46ba-a5f5-cbed8b9961f9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 69.24110429447853,
                "y": 20.916518400599305,
                "width": 30,
                "value": ""
            },
            {
                "id": "c7710896-ea41-434d-bb35-67abfd3f1bd0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 45.0239263803681,
                "y": 27.3101413990074,
                "width": 30,
                "value": ""
            },
            {
                "id": "b2bf37a3-7e17-4e25-9628-a706d9536583",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 45.046625766871166,
                "y": 29.083481599400695,
                "width": 30,
                "value": ""
            },
            {
                "id": "78376db0-3c2a-486b-8553-0c7c58687515",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 45.14662576687117,
                "y": 34.105487405187745,
                "width": 30,
                "value": ""
            },
            {
                "id": "71a1be2f-3da6-490c-978a-7d10cd885716",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 52.01779141104295,
                "y": 34.10548740518775,
                "width": 30,
                "value": ""
            },
            {
                "id": "5a8630e3-0387-49ca-be6b-7302e0c0db31",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 24.019631901840494,
                "y": 59.83682929113211,
                "width": 30,
                "value": ""
            },
            {
                "id": "38d679eb-6435-42c9-a81e-3fe8dd0a23a5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.965030674846627,
                "y": 61.694915254237294,
                "width": 30,
                "value": ""
            },
            {
                "id": "bd0a6e14-aefd-4878-aaff-82d3a810a566",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 40.261349693251525,
                "y": 64.25929394138028,
                "width": 30,
                "value": ""
            },
            {
                "id": "34a16df9-8fb4-4d03-ae20-8cc98289abfa",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 40.33865030674847,
                "y": 66.02326996909824,
                "width": 30,
                "value": ""
            },
            {
                "id": "71f6dd9c-b1b7-4596-a050-d7dda8376ee8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 40.33865030674847,
                "y": 67.84998595374098,
                "width": 30,
                "value": ""
            },
            {
                "id": "b7cb440e-58bf-4737-bf7d-6b169c5e3cf7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 40.26134969325154,
                "y": 69.60764116490309,
                "width": 30,
                "value": ""
            },
            {
                "id": "300d4c25-7ab7-4153-9239-e437de7e8930",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.63128834355828,
                "y": 69.62964697069015,
                "width": 30,
                "value": ""
            },
            {
                "id": "8af4ac96-8526-45f9-b5be-de0d565ccf26",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.65398773006136,
                "y": 67.84998595374098,
                "width": 30,
                "value": ""
            },
            {
                "id": "fed513c6-9404-464d-b178-b0e711b64ed9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.63128834355828,
                "y": 66.12370072104129,
                "width": 30,
                "value": ""
            },
            {
                "id": "77dbe309-5bd0-4bbd-ba6f-6de5b1e20756",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.63128834355828,
                "y": 64.32835471486094,
                "width": 30,
                "value": ""
            },
            {
                "id": "b8d9c040-b301-4503-b9ad-b3417ea1dcb7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.942331288343556,
                "y": 69.64533195992134,
                "width": 30,
                "value": ""
            },
            {
                "id": "45c6d004-3773-4d56-88c6-4ed529daa78f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.919631901840493,
                "y": 67.86567094297217,
                "width": 30,
                "value": ""
            },
            {
                "id": "d4df3d11-c55e-4432-8fb2-d252252d6b6e",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 24.01963190184049,
                "y": 66.08600992602301,
                "width": 30,
                "value": ""
            },
            {
                "id": "543f701d-84df-44f8-97f2-2627a08a5d22",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 24.042331288343558,
                "y": 64.34403970409215,
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
                "y": 23.4278078627189,
                "width": 9.652351738241306,
                "height": 5.762711864406779,
                "value": ""
            },
            {
                "id": "4548129e-9e19-425f-b0a6-6d9d7e31dac6",
                "type": "text",
                "label": "New text",
                "x": 24.574311319619873,
                "y": 23.258316337295167,
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
                "x": 60.85936485023458,
                "y": 23.566120449164266,
                "width": 26.11451942740286,
                "height": 5.338983050847458,
                "value": ""
            },
            {
                "id": "eb7bdef7-d9d0-476b-b9a8-160775ce54d7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 70.61291350896187,
                "y": 18.882715615256586,
                "width": 30,
                "value": ""
            },
            {
                "id": "51dd7083-f8a4-4a94-a69b-2b9caa52cc8f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.55709731745459,
                "y": 21.59458002203624,
                "width": 30,
                "value": ""
            },
            {
                "id": "ccb450a4-0f59-4bae-a4b8-60b7929fc0a8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 9.927847948995549,
                "y": 25.747122394917593,
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
                "x": 50.612624804523044,
                "y": 25.731532925428418,
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
                "x": 73.4669012390232,
                "y": 25.731532925428418,
                "width": 30,
                "value": ""
            },
            {
                "id": "f622e0ca-e16c-4133-ab30-991a0bcc77a8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.4669012390232,
                "y": 28.682045150854492,
                "width": 30,
                "value": ""
            },
            {
                "id": "a89d616a-da14-4aba-ba0f-18c65317b610",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 66.40338626248045,
                "y": 35.83186815762947,
                "width": 30,
                "value": ""
            },
            {
                "id": "1bc81533-d7ba-4e58-8b50-08726a073b0c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 66.39888728497534,
                "y": 34.052207140680316,
                "width": 30,
                "value": ""
            },
            {
                "id": "29bd4d27-a96e-42e2-9520-c28051e0d9d5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 66.39888728497534,
                "y": 32.18780036101929,
                "width": 30,
                "value": ""
            },
            {
                "id": "9e73b79d-49ae-4e04-a068-b3385ae69330",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 42.66571634788886,
                "y": 39.74576271186441,
                "width": 30,
                "value": ""
            },
            {
                "id": "de012292-0dc6-47cd-a884-93ba5d8528f6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 42.72286779742572,
                "y": 37.796610169491515,
                "width": 30,
                "value": ""
            },
            {
                "id": "7a9383d8-7c44-4818-9ae2-1b78b550ab6e",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 42.70031877781788,
                "y": 35.932203389830505,
                "width": 30,
                "value": ""
            },
            {
                "id": "bab77b4e-4ce3-43eb-ba81-53e2e147852b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 42.720618308673174,
                "y": 34.12136343390299,
                "width": 30,
                "value": ""
            },
            {
                "id": "87159729-0b2d-4c00-ad46-a841951fb750",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 42.704065920846865,
                "y": 32.22577771526362,
                "width": 30,
                "value": ""
            },
            {
                "id": "c4f4be44-a2ea-41cd-89e4-e1b00d8298f8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 9.848147479850837,
                "y": 37.88135593220339,
                "width": 30,
                "value": ""
            },
            {
                "id": "fb7e0a5d-15f9-47f3-93af-7b6c2318de4e",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.79017201972814,
                "y": 32.28813559322033,
                "width": 30,
                "value": ""
            },
            {
                "id": "8482d350-7a1f-46fc-87c2-fd60c07e5253",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 9.868447010706124,
                "y": 34.15254237288137,
                "width": 30,
                "value": ""
            },
            {
                "id": "0b0d0e01-8590-480a-a4ec-5a749ef89f5c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 9.890996030313968,
                "y": 32.14103195255175,
                "width": 30,
                "value": ""
            },
            {
                "id": "2e0e7869-e00f-46e6-a50d-f8ca253dcd1a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 66.40338626248045,
                "y": 37.71186440677967,
                "width": 30,
                "value": ""
            },
            {
                "id": "6e45b0af-4d31-4acb-a9ec-c00565844d5d",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 31.782178515578007,
                "y": 43.82914879152308,
                "width": 30,
                "value": ""
            },
            {
                "id": "2dcbd752-acae-46af-9975-94fa6d80e580",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 25.76901239023217,
                "y": 43.82914879152308,
                "width": 30,
                "value": ""
            },
            {
                "id": "aa08aec3-7f86-48c4-a171-bfdbe5585eee",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 52.59821364128473,
                "y": 45.32339358135828,
                "width": 30,
                "value": ""
            },
            {
                "id": "11a93124-48bc-494b-89f4-cdc8f9da578d",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.49546493444005,
                "y": 43.86712614576741,
                "width": 30,
                "value": ""
            },
            {
                "id": "8b5a9ed6-2e96-4c84-847a-7c48756d38d8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 79.39435221941538,
                "y": 43.86712614576741,
                "width": 30,
                "value": ""
            },
            {
                "id": "025cf79b-9c2e-465d-85a3-c2a8c7b403b9",
                "type": "text",
                "label": "New text",
                "x": 16.14326356309395,
                "y": 52.3193145321987,
                "width": 2.6993865030674824,
                "height": 4.661016949152542,
                "value": ""
            },
            {
                "id": "e55c0e49-61ea-4462-a1a1-c5cc6a48c921",
                "type": "text",
                "label": "New text",
                "x": 16.18836160230963,
                "y": 54.59186065592985,
                "width": 2.49488752556237,
                "height": 5.084745762711865,
                "value": ""
            },
            {
                "id": "642f9156-ee0e-4566-81aa-d054b534e3ec",
                "type": "text",
                "label": "New text",
                "x": 16.145513051846503,
                "y": 57.049487774573926,
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
                "x": 54.84920004811741,
                "y": 52.20338983050847,
                "width": 2.6993865030674824,
                "height": 6.610169491525424,
                "value": ""
            },
            {
                "id": "99a37e0d-db9d-4c9f-89ce-e0c997f56856",
                "type": "text",
                "label": "New text",
                "x": 54.8694995789727,
                "y": 54.57627118644067,
                "width": 3.1083844580777074,
                "height": 7.203389830508475,
                "value": ""
            },
            {
                "id": "ad236f1f-da36-45ef-a64b-097287383ef6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 38.75393961265489,
                "y": 59.237288135593225,
                "width": 30,
                "value": ""
            },
            {
                "id": "02ce29bf-7e1e-40df-9dcd-7267507cc248",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 25.73440996030314,
                "y": 59.237288135593225,
                "width": 30,
                "value": ""
            },
            {
                "id": "9dc77f31-e1fc-48ce-9ba8-1cdb3fdac35d",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 15.941014074341389,
                "y": 59.26846707457158,
                "width": 30,
                "value": ""
            },
            {
                "id": "93073452-3006-4f9a-8b55-91fb6ec036f3",
                "type": "text",
                "label": "New text",
                "x": 54.84920004811741,
                "y": 59.49152542372881,
                "width": 3.006134969325151,
                "height": 6.186440677966102,
                "value": ""
            },
            {
                "id": "928cb1ac-7294-446a-b7b4-c398f1b6a037",
                "type": "text",
                "label": "New text",
                "x": 65.0350415012631,
                "y": 59.27526548983754,
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
                "x": 50.79607843137255,
                "y": 41.625758961014604,
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
                "id": "bca399ce-17db-4ee9-98d4-4563f6ac5970",
                "type": "textarea",
                "label": "New textarea",
                "x": 14.154601226993869,
                "y": 71.97637065014314,
                "width": 71.64478527607362,
                "height": 14.712361725292006,
                "value": ""
            },
            {
                "id": "975e25be-9562-4d5e-a0ef-2449f572836b",
                "type": "text",
                "label": "New text",
                "x": 14.27423312883436,
                "y": 15.534953426793368,
                "width": 35.32944785276073,
                "height": 5.831126762456485,
                "value": ""
            },
            {
                "id": "abdb4077-e992-4850-8bc4-fbab3fe461c1",
                "type": "text",
                "label": "New text",
                "x": 75.40674846625767,
                "y": 11.067554671433754,
                "width": 11.335582822085891,
                "height": 4.073240231723544,
                "value": ""
            },
            {
                "id": "75b6f09d-23c1-4070-90b3-872f25bab598",
                "type": "text",
                "label": "New text",
                "x": 15.328834355828223,
                "y": 24.500799741932013,
                "width": 11.983435582822091,
                "height": 6.233081089799594,
                "value": ""
            },
            {
                "id": "2ddce560-0fa3-4a67-9b21-b3acca8e12a5",
                "type": "text",
                "label": "New text",
                "x": 22.74233128834356,
                "y": 27.921398909374634,
                "width": 18.670552147239263,
                "height": 5.2542372881355925,
                "value": ""
            },
            {
                "id": "76d1ecc0-e831-47d3-ab7c-b744e174e5b0",
                "type": "text",
                "label": "New text",
                "x": 46.94662576687117,
                "y": 24.542130942620197,
                "width": 16.550306748466262,
                "height": 5.24879366658154,
                "value": ""
            },
            {
                "id": "502273fb-eb27-4649-a1ad-a6a3bf0c684a",
                "type": "text",
                "label": "New text",
                "x": 30.48036809815951,
                "y": 24.557722550034274,
                "width": 13.200000000000001,
                "value": "",
                "height": 5.396510705789058
            },
            {
                "id": "9306585a-1499-4f5f-9ac8-fc86bff4be0c",
                "type": "text",
                "label": "New text",
                "x": 29.596932515337425,
                "y": 33.01200284950066,
                "width": 15.49754601226994,
                "height": 5.773599107514886,
                "value": ""
            },
            {
                "id": "892aae98-e065-4ac3-8136-20c886d91c5e",
                "type": "text",
                "label": "New text",
                "x": 65.2638036809816,
                "y": 24.58110996115539,
                "width": 18.51042944785276,
                "height": 4.603489294210944,
                "value": ""
            },
            {
                "id": "565fa95e-460e-420e-b3db-1e3609b7688a",
                "type": "text",
                "label": "New text",
                "x": 29.581595092024536,
                "y": 41.54840011141954,
                "width": 14.955214723926376,
                "height": 5.513918197825239,
                "value": ""
            },
            {
                "id": "51aa8db9-c2d2-4469-b950-09cd6d54398a",
                "type": "text",
                "label": "New text",
                "x": 64.97791411042945,
                "y": 32.96656080671197,
                "width": 21.12822085889571,
                "height": 5.079302141157812,
                "value": ""
            },
            {
                "id": "fd7b0e5c-fd78-4874-81ee-807960c418ca",
                "type": "text",
                "label": "New text",
                "x": 47.26196319018404,
                "y": 33.01919733371335,
                "width": 16.380368098159508,
                "height": 5.762711864406779,
                "value": ""
            },
            {
                "id": "21f45174-e96c-4594-84a1-72bae47c5f60",
                "type": "text",
                "label": "New text",
                "x": 47.62883435582822,
                "y": 41.5256550483844,
                "width": 14.644171779141107,
                "height": 5.174935146977782,
                "value": ""
            },
            {
                "id": "5f60661c-2d1d-4be3-bb46-504bbf792207",
                "type": "text",
                "label": "New text",
                "x": 65.62331288343557,
                "y": 41.6410315323106,
                "width": 20.587116564417183,
                "height": 5.079302141157812,
                "value": ""
            },
            {
                "id": "c50e8a5e-10c2-4ec4-bede-cea236f6769d",
                "type": "text",
                "label": "New text",
                "x": 67.05521472392638,
                "y": 46.82150368265955,
                "width": 17.987116564417178,
                "height": 5.836570384010537,
                "value": ""
            },
            {
                "id": "704ffac0-8c66-4109-a4bb-1588ad49d994",
                "type": "text",
                "label": "New text",
                "x": 41.854601226993864,
                "y": 52.5913654753424,
                "width": 22.145398773006136,
                "height": 5.571445852766837,
                "value": ""
            },
            {
                "id": "b632bf18-bacd-46ef-9829-d062377afbae",
                "type": "text",
                "label": "New text",
                "x": 70.62331288343559,
                "y": 54.52312672176207,
                "width": 15.596319018404902,
                "height": 5.079302141157812,
                "value": ""
            },
            {
                "id": "34443b9d-4593-4984-9621-63f916184040",
                "type": "text",
                "label": "New text",
                "x": 70.5006134969325,
                "y": 52.63874514442397,
                "width": 15.232515337423314,
                "height": 5.639860750816543,
                "value": ""
            },
            {
                "id": "51e27c99-5dac-4591-bfca-c1e2e9cf5af1",
                "type": "text",
                "label": "New text",
                "x": 52.33128834355829,
                "y": 60.0459011545854,
                "width": 9.96564417177914,
                "height": 5.021774486216213,
                "value": ""
            },
            {
                "id": "3f66cf02-f5ec-481e-8285-ab205342357f",
                "type": "text",
                "label": "New text",
                "x": 46.723312883435575,
                "y": 58.080417747550364,
                "width": 15.655828220858897,
                "height": 4.857726582346536,
                "value": ""
            },
            {
                "id": "55e213f0-7d9c-4dfd-a30d-f9c74abb2c2d",
                "type": "text",
                "label": "New text",
                "x": 49.623312883435574,
                "y": 67.57960456457748,
                "width": 34.68773006134969,
                "height": 5.169491525423729,
                "value": ""
            },
            {
                "id": "204a89f6-f2ef-4459-b4b3-fc99d0a02307",
                "type": "text",
                "label": "New text",
                "x": 32.74049079754601,
                "y": 64.28480221508353,
                "width": 49.4159509202454,
                "height": 5.888654417398082,
                "value": ""
            },
            {
                "id": "869e81ba-c923-4e12-b8cb-ccf755198494",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.719631901840494,
                "y": 18.05633563511776,
                "width": 30,
                "value": ""
            },
            {
                "id": "9eafc0ac-f6b6-4a27-86ee-a2560522718f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.24233128834356,
                "y": 18.138404514288684,
                "width": 30,
                "value": ""
            },
            {
                "id": "1fc229d0-494f-4522-a3cf-804336e8d664",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.901226993865032,
                "y": 26.107463238196253,
                "width": 30,
                "value": false
            },
            {
                "id": "ff5c6a4c-ccad-4c35-8d22-411ded7b8ff5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.923926380368112,
                "y": 27.966426396303223,
                "width": 30,
                "value": false
            },
            {
                "id": "785df539-f506-4f4f-a19c-6a0faa56c4b9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 60.3957055214724,
                "y": 18.36722338319316,
                "width": 30,
                "value": ""
            },
            {
                "id": "6c8060f2-1a8d-4715-8091-6fb89f90a4c4",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.59570552147239,
                "y": 18.06934374080802,
                "width": 30,
                "value": ""
            },
            {
                "id": "17352298-778a-4d9f-ad3a-24a0e15aae7c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 67.8957055214724,
                "y": 15.329294176784147,
                "width": 30,
                "value": ""
            },
            {
                "id": "017f2412-6b19-46ba-a5f5-cbed8b9961f9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 50.24110429447853,
                "y": 15.44467066071033,
                "width": 30,
                "value": ""
            },
            {
                "id": "c7710896-ea41-434d-bb35-67abfd3f1bd0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 24.823926380368103,
                "y": 26.27921356395585,
                "width": 30,
                "value": ""
            },
            {
                "id": "b2bf37a3-7e17-4e25-9628-a706d9536583",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 33.84662576687117,
                "y": 26.22860451771949,
                "width": 30,
                "value": ""
            },
            {
                "id": "78376db0-3c2a-486b-8553-0c7c58687515",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.54662576687117,
                "y": 28.00946390371344,
                "width": 30,
                "value": ""
            },
            {
                "id": "71a1be2f-3da6-490c-978a-7d10cd885716",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.61779141104295,
                "y": 26.185514657083775,
                "width": 30,
                "value": ""
            },
            {
                "id": "5a8630e3-0387-49ca-be6b-7302e0c0db31",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.719631901840495,
                "y": 34.85665482642156,
                "width": 30,
                "value": ""
            },
            {
                "id": "38d679eb-6435-42c9-a81e-3fe8dd0a23a5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.76503067484663,
                "y": 36.63543864836893,
                "width": 30,
                "value": ""
            },
            {
                "id": "bd0a6e14-aefd-4878-aaff-82d3a810a566",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 62.461349693251535,
                "y": 69.49323525779582,
                "width": 30,
                "value": ""
            },
            {
                "id": "34a16df9-8fb4-4d03-ae20-8cc98289abfa",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 39.038650306748465,
                "y": 69.51256418004193,
                "width": 30,
                "value": ""
            },
            {
                "id": "71f6dd9c-b1b7-4596-a050-d7dda8376ee8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 46.43865030674847,
                "y": 69.51533091805501,
                "width": 30,
                "value": ""
            },
            {
                "id": "300d4c25-7ab7-4153-9239-e437de7e8930",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.03128834355829,
                "y": 69.47104268837452,
                "width": 30,
                "value": ""
            },
            {
                "id": "8af4ac96-8526-45f9-b5be-de0d565ccf26",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 69.65398773006136,
                "y": 59.91977183795986,
                "width": 30,
                "value": ""
            },
            {
                "id": "fed513c6-9404-464d-b178-b0e711b64ed9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.13128834355828,
                "y": 58.11418446410236,
                "width": 30,
                "value": ""
            },
            {
                "id": "77dbe309-5bd0-4bbd-ba6f-6de5b1e20756",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 78.4312883435583,
                "y": 58.14278770455166,
                "width": 30,
                "value": ""
            },
            {
                "id": "b8d9c040-b301-4503-b9ad-b3417ea1dcb7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 22.242331288343557,
                "y": 67.66277843097605,
                "width": 30,
                "value": ""
            },
            {
                "id": "45c6d004-3773-4d56-88c6-4ed529daa78f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.219631901840486,
                "y": 61.6801039326629,
                "width": 30,
                "value": ""
            },
            {
                "id": "d4df3d11-c55e-4432-8fb2-d252252d6b6e",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 26.71963190184049,
                "y": 69.41669985465109,
                "width": 30,
                "value": ""
            },
            {
                "id": "543f701d-84df-44f8-97f2-2627a08a5d22",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 31.842331288343555,
                "y": 67.5954274915624,
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
            },
            {
                "id": "8ea8bb58-a40b-4ff7-b2a7-d9dce2ec1164",
                "type": "text",
                "label": "New text",
                "x": 70.5,
                "y": 56.34020618556701,
                "width": 15.9,
                "value": "",
                "height": 5.317208564631247
            },
            {
                "id": "29626c47-0f66-486e-8ead-41e8319c4248",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 53.6,
                "y": 69.50436161776369,
                "width": 30,
                "value": false
            },
            {
                "id": "96de87d7-bbd1-482e-a2c8-d9fcd44a5fef",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.10000000000001,
                "y": 61.73275178429818,
                "width": 30,
                "value": false
            },
            {
                "id": "ef934b09-9e00-4820-9fbd-6c4451f1e35f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 46.5,
                "y": 61.73275178429818,
                "width": 30,
                "value": false
            },
            {
                "id": "b4e56984-71ea-4691-9513-cb78ab6f1f17",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 39,
                "y": 61.65344964314037,
                "width": 30,
                "value": false
            },
            {
                "id": "59dfe272-6f5e-482f-872a-54058d34e20c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 66,
                "y": 61.65344964314037,
                "width": 30,
                "value": false
            },
            {
                "id": "222cd433-628d-46a9-96b4-2fdb75964b83",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 32,
                "y": 59.908802537668514,
                "width": 30,
                "value": false
            },
            {
                "id": "98b51dc7-f155-4628-9c44-6be07e7a84b1",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 24.8,
                "y": 60.067406819984136,
                "width": 30,
                "value": false
            },
            {
                "id": "c1ce6de1-29ce-4511-a81f-20e7bb9c06eb",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.700000000000001,
                "y": 56.18160190325139,
                "width": 30,
                "value": false
            },
            {
                "id": "a9f54d47-a734-4949-aa12-5f8eeed743a7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.700000000000001,
                "y": 54.27835051546393,
                "width": 30,
                "value": false
            },
            {
                "id": "0b6ac437-961b-4dd7-bfa5-34504920e930",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 32,
                "y": 58.00555114988105,
                "width": 30,
                "value": false
            },
            {
                "id": "d6575e76-1c85-4657-b8e6-dd126f8f0f97",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 39,
                "y": 59.8295003965107,
                "width": 30,
                "value": false
            },
            {
                "id": "484a345c-b457-41dc-802f-f3938507b124",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 50.1,
                "y": 54.35765265662174,
                "width": 30,
                "value": false
            },
            {
                "id": "9f69fcc0-5038-4478-8fc3-196412bd421a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 37.1,
                "y": 58.00555114988105,
                "width": 30,
                "value": false
            },
            {
                "id": "e5ee9ace-07da-49c2-868a-e30ae28d1a59",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 43.3,
                "y": 54.27835051546393,
                "width": 30,
                "value": false
            },
            {
                "id": "93fb8114-3aab-4d72-83df-f0bfff5b6bc7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.3,
                "y": 52.53370340999207,
                "width": 30,
                "value": false
            },
            {
                "id": "740e07f8-b1d5-4356-a074-77f6d38657ee",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 43.3,
                "y": 56.18160190325139,
                "width": 30,
                "value": false
            },
            {
                "id": "b4032a53-9ff9-468a-aa56-87e6d7d2e6ce",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 33.900000000000006,
                "y": 43.33465503568596,
                "width": 30,
                "value": false
            },
            {
                "id": "92d2b63a-965b-4e5c-bae0-4491d2064c2a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 24.8,
                "y": 43.25535289452815,
                "width": 30,
                "value": false
            },
            {
                "id": "fa0a7cbf-57a2-495d-b659-f94ec32ffe28",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 22.1,
                "y": 48.72720063441713,
                "width": 30,
                "value": false
            },
            {
                "id": "1588c1ac-5bc4-4e0e-9c91-18001dbb0e4e",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 50.1,
                "y": 56.2609040444092,
                "width": 30,
                "value": false
            },
            {
                "id": "e88399c7-7272-4ce3-b191-eead8d30ddd9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 22.1,
                "y": 46.744647105471856,
                "width": 30,
                "value": false
            },
            {
                "id": "d85d47a6-79ae-4bef-a786-5b8fd0ebeff4",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.700000000000001,
                "y": 45.23790642347344,
                "width": 30,
                "value": false
            },
            {
                "id": "20965488-daf0-414c-a008-b215a6c40244",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 13.700000000000001,
                "y": 43.33465503568596,
                "width": 30,
                "value": false
            },
            {
                "id": "b85bfdfb-b63a-4b88-b90e-ca5044a11df5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.00000000000001,
                "y": 43.41395717684377,
                "width": 30,
                "value": false
            },
            {
                "id": "7229dbb8-d563-45cf-9390-2e74598de08c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.6,
                "y": 45.23790642347344,
                "width": 30,
                "value": false
            },
            {
                "id": "e39274e8-b1a8-43d9-9b52-8ba3353061cd",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.6,
                "y": 43.25535289452815,
                "width": 30,
                "value": false
            },
            {
                "id": "2d7f3fce-4790-4972-8e39-3c65f8f90c6b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.00000000000001,
                "y": 45.23790642347344,
                "width": 30,
                "value": false
            },
            {
                "id": "78af0d4a-5fdd-4b89-a571-db1967788108",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 66,
                "y": 48.72720063441713,
                "width": 30,
                "value": false
            },
            {
                "id": "32cdb00b-75d0-49c2-a121-7d1ffd382b67",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.00000000000001,
                "y": 48.72720063441712,
                "width": 30,
                "value": false
            },
            {
                "id": "9ee9ac89-3a5e-45c0-9b48-4e18c82dda7a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.5,
                "y": 50.5511498810468,
                "width": 30,
                "value": false
            },
            {
                "id": "94f97405-d823-4b21-ad4a-b932c42e511c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.5,
                "y": 48.72720063441713,
                "width": 30,
                "value": false
            },
            {
                "id": "dce98ca9-d1e4-4f52-836b-d1a361986400",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 32,
                "y": 50.70975416336242,
                "width": 30,
                "value": false
            },
            {
                "id": "738e413b-4466-467d-8b1e-7dd147e04b81",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 32,
                "y": 48.72720063441713,
                "width": 30,
                "value": false
            },
            {
                "id": "8b82cd89-27f4-4832-bf71-5ddba35de294",
                "type": "text",
                "label": "New text",
                "x": 35,
                "y": 46.90325138778748,
                "width": 26.900000000000002,
                "value": "",
                "height": 5.713719270420302
            },
            {
                "id": "087178f5-e9cb-48e0-903b-6792d7a6f2cd",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.1,
                "y": 34.84932593180016,
                "width": 30,
                "value": false
            },
            {
                "id": "54934d07-9976-4e70-85d7-dfb9f21c1551",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.00000000000001,
                "y": 36.59397303727201,
                "width": 30,
                "value": false
            },
            {
                "id": "d316dea4-1ad5-47f0-8f40-4a52555a4522",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.00000000000001,
                "y": 34.77002379064235,
                "width": 30,
                "value": false
            },
            {
                "id": "508f4909-6ca6-4396-8166-4f8f5f3f249a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.6,
                "y": 36.59397303727201,
                "width": 30,
                "value": false
            },
            {
                "id": "725d332b-6595-4c8d-8167-3dbfd30b4e3f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.6,
                "y": 34.69072164948454,
                "width": 30,
                "value": false
            },
            {
                "id": "26245311-ef4b-45b1-8963-52424b086567",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 33.800000000000004,
                "y": 34.84932593180016,
                "width": 30,
                "value": false
            },
            {
                "id": "0171be56-dbc4-40b3-98fb-ab8428152596",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 24.8,
                "y": 34.77002379064235,
                "width": 30,
                "value": false
            },
            {
                "id": "c82f864b-df0b-4d07-8d42-8150c69c463d",
                "type": "text",
                "label": "New text",
                "x": 74.2,
                "y": 36.514670896114204,
                "width": 9.8,
                "value": "",
                "height": 4.127676447264077
            },
            {
                "id": "fbeccf4d-8b83-4699-9050-fe7d7b3a7f22",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.00000000000001,
                "y": 28.029341792228397,
                "width": 30,
                "value": false
            },
            {
                "id": "8d28c697-1c39-4560-8753-060b1c4c1e1f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.00000000000001,
                "y": 26.126090404440923,
                "width": 30,
                "value": false
            },
            {
                "id": "bed6866d-bb44-4a95-b12b-bfdda083d3e9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73,
                "y": 26.284694686756545,
                "width": 30,
                "value": false
            },
            {
                "id": "d9e9a38f-7fd3-4283-bb9a-b471493b9f31",
                "type": "text",
                "label": "New text",
                "x": 74.4,
                "y": 27.950039651070586,
                "width": 11.700000000000001,
                "value": "",
                "height": 5.5551149881046795
            },
            {
                "id": "10da0dbe-8e62-4b5d-81e2-ea272dca9e6d",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 62.4,
                "y": 59.908802537668514,
                "width": 30,
                "value": false
            },
            {
                "id": "b095bcea-147b-4708-9dca-bac278253b4a",
                "type": "text",
                "label": "New text",
                "x": 63.3,
                "y": 18.1958762886598,
                "width": 21,
                "value": "",
                "height": 4.841395717684378
            },
            {
                "id": "3c710a27-b8b7-4689-ab83-5d50876aec84",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 73.1,
                "y": 43.33465503568596,
                "width": 30,
                "value": false
            },
            {
                "id": "98e55e1d-1b51-4b9c-9cb4-574c4cb55427",
                "type": "text",
                "label": "New text",
                "x": 22.8,
                "y": 36.5146708961142,
                "width": 18.4,
                "value": "",
                "height": 5.158604282315624
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
                "y": 21.363209540354003,
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
                "x": 55.87723378212976,
                "y": 37.172402460209405,
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
                "x": 15.151162790697676,
                "y": 27.326400300483588,
                "width": 3.0842105263157884,
                "height": 7.426639748344993,
                "value": ""
            },
            {
                "id": "a3ed6d02-8b82-42d8-ae4f-e55b79d7fbb0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.638310893512852,
                "y": 33.00436640217851,
                "width": 30,
                "value": ""
            },
            {
                "id": "11639308-dc18-4771-8ec4-04f3d9056e26",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.98922888616892,
                "y": 42.226160852622186,
                "width": 30,
                "value": ""
            },
            {
                "id": "096538eb-da8b-4b15-be37-9b9c4da56a4c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 56.88922888616891,
                "y": 39.39128597586741,
                "width": 30,
                "value": ""
            },
            {
                "id": "46a969b6-6524-4bec-9860-0387e7f79fd0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 77.86425948592411,
                "y": 23.481853608150622,
                "width": 30,
                "value": ""
            },
            {
                "id": "b873a830-2ca5-47e7-8717-89aa59e1bde4",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 64.64516523867809,
                "y": 23.459082586036903,
                "width": 30,
                "value": ""
            },
            {
                "id": "5b0c3af9-9467-4f4e-94f2-64983ff51ae0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 54.808445532435734,
                "y": 23.497347293300155,
                "width": 30,
                "value": ""
            },
            {
                "id": "b2666170-da3e-4614-9aa9-ddfad6803a4c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 37.06058751529987,
                "y": 23.459082586036903,
                "width": 30,
                "value": ""
            },
            {
                "id": "72e9275d-3d0e-4c66-a33a-ca23be46ac51",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.783108935128517,
                "y": 23.42809521573783,
                "width": 30,
                "value": ""
            },
            {
                "id": "86c5ad0f-0664-4d71-974c-0c48178cbe79",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.660709914320684,
                "y": 27.24165453777173,
                "width": 30,
                "value": ""
            },
            {
                "id": "512ec2f8-1c15-4771-a2c6-e9aa5be4ae90",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 48.19889840881273,
                "y": 21.193718014930276,
                "width": 30,
                "value": ""
            },
            {
                "id": "66ba1c38-455d-4c36-89ba-33ece684deac",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 39.38616891064871,
                "y": 21.209211700079813,
                "width": 30,
                "value": ""
            },
            {
                "id": "7227eaa2-ac2a-49a0-930d-bc2b12d51e7c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.551040391676864,
                "y": 21.139959622517488,
                "width": 30,
                "value": ""
            },
            {
                "id": "d5d1dbf4-ae48-4099-865a-76ca742f4bf3",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.76070991432068,
                "y": 21.193718014930276,
                "width": 30,
                "value": ""
            },
            {
                "id": "12b66ea4-cc19-4df0-ac45-7a63149f0bd3",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.451040391676866,
                "y": 33.00436640217852,
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
                "x": 48.19889840881273,
                "y": 55.54673928353443,
                "width": 30,
                "value": ""
            },
            {
                "id": "3312ca51-1cad-463b-a2db-6ff6af6687b2",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 39.38616891064871,
                "y": 55.54673928353444,
                "width": 30,
                "value": ""
            },
            {
                "id": "1b147cdf-775e-4d42-8236-0adcd0e920ce",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.5734394124847,
                "y": 55.58500399079769,
                "width": 30,
                "value": ""
            },
            {
                "id": "b968ca16-be59-47f6-b431-d34e76b91696",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.76070991432068,
                "y": 55.600497675947224,
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
                "x": 75.71627906976744,
                "y": 57.85036856190431,
                "width": 30,
                "value": ""
            },
            {
                "id": "8cd5d422-6d87-42e6-af2e-8aae99c9e64a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 59.21481028151775,
                "y": 57.83487487675478,
                "width": 30,
                "value": ""
            },
            {
                "id": "10c2711b-d6ef-4263-a31e-9b26872a7182",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 48.12129742962056,
                "y": 57.83487487675478,
                "width": 30,
                "value": ""
            },
            {
                "id": "829a3a44-3f6b-4101-94eb-73ab0461db57",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 34.979804161566705,
                "y": 57.81938119160523,
                "width": 30,
                "value": ""
            },
            {
                "id": "4facb855-f271-4181-b478-cf031aaf8ee0",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.638310893512852,
                "y": 57.81938119160523,
                "width": 30,
                "value": ""
            },
            {
                "id": "c061618a-9887-4701-8b52-6037894a2c28",
                "type": "text",
                "label": "New text",
                "x": 15.17356181150551,
                "y": 60.34626038781163,
                "width": 2.5946144430844544,
                "height": 6.255692755528429,
                "value": ""
            },
            {
                "id": "767880bd-2212-44eb-92c6-a04d2148b1d6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.5734394124847,
                "y": 60.26151462509978,
                "width": 30,
                "value": ""
            },
            {
                "id": "b391e724-db77-4ef8-85fc-341221bcda78",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.738310893512853,
                "y": 60.22324991783652,
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
                "x": 80.12264381884945,
                "y": 62.34189398563312,
                "width": 30,
                "value": ""
            },
            {
                "id": "b2af59b6-1b44-4d5f-830d-3f331877d074",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 71.13231334149329,
                "y": 62.35738767078267,
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
                "x": 30.673439412484697,
                "y": 65.70073712380862,
                "width": 30,
                "value": ""
            },
            {
                "id": "f92decdb-f6b3-4e8d-a551-4b2e16f76679",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 21.83831089351285,
                "y": 65.70073712380862,
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
                "x": 57.03402692778457,
                "y": 74.93802525940187,
                "width": 30,
                "value": ""
            },
            {
                "id": "bb303a5b-a98c-4622-aeb7-2e96d732cd10",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 57.03402692778457,
                "y": 72.10315038264706,
                "width": 30,
                "value": ""
            },
            {
                "id": "f2ce6342-e7ed-44f4-965e-b2d141ed62f7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 80.06744186046512,
                "y": 29.60725855673975,
                "width": 30,
                "value": ""
            },
            {
                "id": "e1e8309b-8c77-4aab-8a66-48a549551969",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 71.2547123623011,
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
            },
            {
                "id": "dfca8ee2-f665-4b80-b5b9-6f61338dca1b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 30.400000000000006,
                "y": 27.202216066482,
                "width": 30,
                "value": false
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
                "x": 4.814443084455325,
                "y": 24.445044368280204,
                "width": 30,
                "value": ""
            },
            {
                "id": "0f214810-72fd-4fc1-b806-5d696e658c4f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 51.30367197062423,
                "y": 22.257148222921263,
                "width": 30,
                "value": ""
            },
            {
                "id": "3449b073-225a-4f53-8150-07c9b5b208cc",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 36.37099143206854,
                "y": 22.203389830508474,
                "width": 30,
                "value": ""
            },
            {
                "id": "015c1d29-f34b-4928-8c74-ce903b0cc54b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.459118727050182,
                "y": 22.2726419080708,
                "width": 30,
                "value": ""
            },
            {
                "id": "bb8e7685-42c4-492e-8e35-1c9c073b2b20",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.892044063647492,
                "y": 22.172402460209394,
                "width": 30,
                "value": ""
            },
            {
                "id": "de3a013f-8125-42c7-a230-f6f0500c660c",
                "type": "text",
                "label": "New text",
                "x": 41.978947368421046,
                "y": 24.768533733978124,
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
                "x": 70.37552019583843,
                "y": 24.460538053429737,
                "width": 30,
                "value": ""
            },
            {
                "id": "1098d459-3fe0-4828-a770-3686f886b3f9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 70.35312117503061,
                "y": 22.187896145358938,
                "width": 30,
                "value": ""
            },
            {
                "id": "1a90c7b0-3d79-4fc7-acab-0cb86de11f0f",
                "type": "text",
                "label": "New text",
                "x": 56.76682986536108,
                "y": 32.357387670782664,
                "width": 3.4394124847001217,
                "height": 7.033898305084746,
                "value": ""
            },
            {
                "id": "fa78e3b8-6dc9-41aa-8bd2-61dc91b55277",
                "type": "text",
                "label": "New text",
                "x": 63.44357405140758,
                "y": 28.62857411146063,
                "width": 3.1946144430844545,
                "height": 6.271186440677965,
                "value": ""
            },
            {
                "id": "c5c21d90-fc03-4489-bba0-5933ed9bb25c",
                "type": "text",
                "label": "New text",
                "x": 51.4812729498164,
                "y": 30.42372881355932,
                "width": 3.9290085679314557,
                "height": 6.525423728813559,
                "value": ""
            },
            {
                "id": "e1e6e239-5426-440e-95c1-99f3c61f4fda",
                "type": "text",
                "label": "New text",
                "x": 51.40367197062423,
                "y": 28.559322033898304,
                "width": 3.4394124847001217,
                "height": 7.457627118644068,
                "value": ""
            },
            {
                "id": "1f802c30-39c6-41d7-ac33-41693a163d5e",
                "type": "text",
                "label": "New text",
                "x": 33.92301101591187,
                "y": 34.05230292501996,
                "width": 3.4394124847001217,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "c8972ab4-19bf-4cb4-97d5-cd521947d7aa",
                "type": "text",
                "label": "New text",
                "x": 29.394247246022033,
                "y": 32.25714822292126,
                "width": 2.7050183598531206,
                "height": 7.796610169491526,
                "value": ""
            },
            {
                "id": "d37a85be-cd32-400b-a606-60449fe13443",
                "type": "text",
                "label": "New text",
                "x": 36.34859241126071,
                "y": 28.613080426311093,
                "width": 3.3170134638922883,
                "height": 7.203389830508475,
                "value": ""
            },
            {
                "id": "814d605f-49fa-48bc-bbeb-9fb845771543",
                "type": "text",
                "label": "New text",
                "x": 4.892044063647492,
                "y": 34.05230292501996,
                "width": 3.229008567931456,
                "height": 6.525423728813559,
                "value": ""
            },
            {
                "id": "7930884f-b3eb-4290-a23f-2a498b0d4ff6",
                "type": "text",
                "label": "New text",
                "x": 4.892044063647492,
                "y": 32.272641908070796,
                "width": 3.229008567931456,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "dc396c94-ea75-4cca-b07f-ddfab9d21e81",
                "type": "text",
                "label": "New text",
                "x": 4.769645042839658,
                "y": 30.42372881355932,
                "width": 3.2514075887392893,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "09e342d2-0c49-4768-b0e6-c2fc4499cdb3",
                "type": "text",
                "label": "New text",
                "x": 5.036842105263159,
                "y": 28.543828348748768,
                "width": 3.3170134638922875,
                "height": 5.169491525423728,
                "value": ""
            },
            {
                "id": "c111fe05-8cd3-436e-ba8a-5b68aef50769",
                "type": "text",
                "label": "New text",
                "x": 68.1171358629131,
                "y": 34.12155500258229,
                "width": 24.247246022031824,
                "height": 5.593220338983051,
                "value": ""
            },
            {
                "id": "3a5195a7-67c5-469e-ae84-e4d3dee229b4",
                "type": "text",
                "label": "New text",
                "x": 11.868788249694003,
                "y": 39.81501478942673,
                "width": 3.3170134638922883,
                "height": 7.457627118644068,
                "value": ""
            },
            {
                "id": "24253a9b-39c2-4929-949e-43cc6ee457f8",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 7.295226438188496,
                "y": 45.94769707498005,
                "width": 30,
                "value": ""
            },
            {
                "id": "1451d53b-c199-4114-b01e-d02c3bf39c79",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 7.317625458996329,
                "y": 44.06779661016949,
                "width": 30,
                "value": ""
            },
            {
                "id": "d3b44162-4e9c-4628-9024-f467db88d291",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.914443084455325,
                "y": 41.91816517207381,
                "width": 30,
                "value": ""
            },
            {
                "id": "9e866acc-a686-42b6-a4aa-613d91d977ba",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.892044063647492,
                "y": 37.86586224705385,
                "width": 30,
                "value": ""
            },
            {
                "id": "f9aeba1c-5bb6-4fe5-a7fb-ca2fb3b482f4",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 46.385312117503055,
                "y": 45.916709704680976,
                "width": 30,
                "value": ""
            },
            {
                "id": "c8deb94e-eb0b-441d-b3c6-009734fd3577",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 46.385312117503055,
                "y": 43.96755716230809,
                "width": 30,
                "value": ""
            },
            {
                "id": "a6e0d99c-cd8c-4291-a124-8933b145c8bf",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.83414932680539,
                "y": 39.86877318183952,
                "width": 30,
                "value": ""
            },
            {
                "id": "9f0bbfe9-eb55-441b-b98d-159a10004d83",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.81175030599755,
                "y": 37.81938119160524,
                "width": 30,
                "value": ""
            },
            {
                "id": "3cd77d9a-0f39-4299-928a-eacf955f1c56",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.559118727050183,
                "y": 45.94769707498005,
                "width": 30,
                "value": ""
            },
            {
                "id": "2b875383-f287-4c1f-868a-f06efd5c2a17",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.55911872705018,
                "y": 43.983050847457626,
                "width": 30,
                "value": ""
            },
            {
                "id": "d1dc15a5-9d31-41b2-9287-bfad8effa542",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.45911872705018,
                "y": 42.018404619935204,
                "width": 30,
                "value": ""
            },
            {
                "id": "71037d12-4d18-4d5f-9436-55a01e9b453a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.414320685434515,
                "y": 39.938025259401854,
                "width": 30,
                "value": ""
            },
            {
                "id": "9a55abb4-f072-4e96-8866-517bddb936c5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.514320685434516,
                "y": 37.97337903187943,
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
                "y": 37.834874876754775,
                "width": 21.432068543451653,
                "height": 5.932203389830509,
                "value": ""
            },
            {
                "id": "d057a612-a327-404c-8a77-a4076a91d5e8",
                "type": "text",
                "label": "New text",
                "x": 59.01481028151775,
                "y": 37.950608009765716,
                "width": 3.2394124847001216,
                "height": 7.88135593220339,
                "value": ""
            },
            {
                "id": "82f0ed16-6957-4130-b74d-ee765c3117e6",
                "type": "text",
                "label": "New text",
                "x": 75.70587515299879,
                "y": 48.682332503873425,
                "width": 16.658506731946144,
                "height": 5.508474576271186,
                "value": ""
            },
            {
                "id": "38fea94f-3d16-4a88-8ea5-1b5eb824e240",
                "type": "text",
                "label": "New text",
                "x": 75.78347613219097,
                "y": 46.41696793276679,
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
                "x": 59.09241126070991,
                "y": 50.492980891121654,
                "width": 30,
                "value": ""
            },
            {
                "id": "b27b30ab-70d9-4acd-b666-3948657c1f51",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 59.11481028151775,
                "y": 48.69782618902296,
                "width": 30,
                "value": ""
            },
            {
                "id": "8c53a106-ea10-4a63-a872-cb558b1c2b48",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 58.99241126070991,
                "y": 43.96755716230809,
                "width": 30,
                "value": ""
            },
            {
                "id": "aef13010-9bf5-45bf-b838-26c4ade337c6",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 72.57870257037943,
                "y": 50.51575191323536,
                "width": 30,
                "value": ""
            },
            {
                "id": "d471f255-66d2-496f-8444-dff3bc9f9c35",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 17.054345165238676,
                "y": 48.69782618902296,
                "width": 30,
                "value": ""
            },
            {
                "id": "bea43c77-b0a4-4a9f-9d03-4ebb4b7f1c04",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.7920440636474915,
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
                "x": 87.65618115055081,
                "y": 52.78111648434199,
                "width": 3.4394124847001217,
                "height": 5.762711864406779,
                "value": ""
            },
            {
                "id": "a448981a-8e63-4aea-895a-2f204d28a0ba",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 85.40820073439413,
                "y": 55.23874360298606,
                "width": 30,
                "value": ""
            },
            {
                "id": "e530862e-d067-4c47-908b-6b8de91f3a36",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 78.33145654834762,
                "y": 55.22324991783651,
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
                "x": 19.52472460220318,
                "y": 55.83924127893328,
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
                "x": 17.13194614443084,
                "y": 63.697826189022955,
                "width": 30,
                "value": ""
            },
            {
                "id": "a6d4b07c-3801-4e0b-8111-b7e7c80c1f18",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 17.10954712362301,
                "y": 61.87168411662519,
                "width": 30,
                "value": ""
            },
            {
                "id": "f3b0aa50-3a93-4470-849a-6d3b90f43982",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.892044063647492,
                "y": 63.713319874172505,
                "width": 30,
                "value": ""
            },
            {
                "id": "d972d9fc-1493-4875-8b8a-dea179d92083",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.869645042839657,
                "y": 61.73317996150054,
                "width": 30,
                "value": ""
            },
            {
                "id": "a15af13d-1437-41d6-a649-200a8d18e354",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 29.371848225214197,
                "y": 59.61453589370394,
                "width": 30,
                "value": ""
            },
            {
                "id": "6d05691b-3a89-4eeb-a63d-444139ce2e90",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 23.474296205630353,
                "y": 59.58354852340485,
                "width": 30,
                "value": ""
            },
            {
                "id": "67bd5d4f-835f-4339-96f6-115c7f81a981",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 27.046266829865363,
                "y": 67.91962063946664,
                "width": 30,
                "value": ""
            },
            {
                "id": "4040e283-48c6-4280-a7c0-2825b96de5c5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 17.087148102815178,
                "y": 67.96610169491527,
                "width": 30,
                "value": ""
            },
            {
                "id": "3e412efd-8983-4876-a4bf-cdf0ef79509c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.43671970624235,
                "y": 72.07216301234799,
                "width": 30,
                "value": ""
            },
            {
                "id": "a769faf8-177d-40c9-87ef-88ca9d0e743f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.43671970624235,
                "y": 70.20775623268698,
                "width": 30,
                "value": ""
            },
            {
                "id": "f815488b-8cad-4aa4-8b21-e98c056a6100",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.847246022031824,
                "y": 72.03389830508475,
                "width": 30,
                "value": ""
            },
            {
                "id": "ecb85a5c-98de-4574-b532-51e5a207589b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.7920440636474915,
                "y": 70.2770083102493,
                "width": 30,
                "value": ""
            },
            {
                "id": "79f5e14c-0cce-4d4a-8932-b14f3116cff9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 4.847246022031823,
                "y": 66.10169491525424,
                "width": 30,
                "value": ""
            },
            {
                "id": "b0b4af15-47c8-4681-8fc5-77a768dbaf1b",
                "type": "text",
                "label": "New text",
                "x": 17.087148102815178,
                "y": 66.0862012301047,
                "width": 3.6842105263157885,
                "height": 6.9491525423728815,
                "value": ""
            },
            {
                "id": "b7146933-f229-4366-a9ec-fb7e8a9eb201",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 39.38616891064871,
                "y": 67.91962063946664,
                "width": 30,
                "value": ""
            },
            {
                "id": "2f3b0c79-2eb5-4b88-b5d4-c88cdc4f553c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 80.65703794369644,
                "y": 66.05521385980563,
                "width": 30,
                "value": ""
            },
            {
                "id": "c47095d4-9433-4b93-89b4-40c5ca4908eb",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 70.39791921664627,
                "y": 72.18789614535895,
                "width": 30,
                "value": ""
            },
            {
                "id": "d0f23418-6469-42e0-8167-d293b78f254f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 70.47552019583844,
                "y": 70.22324991783651,
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
                "x": 44.05973072215422,
                "y": 57.711864406779654,
                "width": 30,
                "value": ""
            },
            {
                "id": "a1fb5012-1684-45c5-9317-73881c7ca626",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 78.33145654834762,
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
    {
        id: 'contract-review',
        name: 'Contract Review Form',
        imagePath: '/forms/contract-review.png', // Placeholder: Update when image is confirmed
        defaultFields: [
            {
                "id": "83c7815f-f697-4a00-86a7-0123725f88c8",
                "type": "text",
                "label": "New text",
                "x": 37.4,
                "y": 6.057108140947755,
                "width": 24.099999999999998,
                "value": "",
                "height": 5.425273390036453
            },
            {
                "id": "e261faf9-012d-487e-9da2-f30ccae6f674",
                "type": "text",
                "label": "New text",
                "x": 81.6,
                "y": 6.1786148238153125,
                "width": 13,
                "value": "",
                "height": 4.392466585662212
            },
            {
                "id": "69f36961-0d89-408b-ab12-badfed4e8acb",
                "type": "text",
                "label": "New text",
                "x": 38.3,
                "y": 8.36573511543135,
                "width": 30,
                "value": ""
            },
            {
                "id": "01e32b05-181f-4b80-80ce-09202ed2f779",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 61,
                "y": 10.492102065613611,
                "width": 30,
                "value": false
            },
            {
                "id": "301dc55d-c0e5-4199-b757-d12431c3055b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 41.099999999999994,
                "y": 10.431348724179832,
                "width": 30,
                "value": false
            },
            {
                "id": "fc6e6682-85bd-4b9a-8db8-c5134ae7f11a",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 12.7,
                "y": 37.77035236938032,
                "width": 30,
                "value": false
            },
            {
                "id": "630f3b55-7f54-4adb-92f2-b175589109bc",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 7.6,
                "y": 37.77035236938032,
                "width": 30,
                "value": false
            },
            {
                "id": "eb5c9ae3-b966-4fb5-8798-6656d7a19450",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 12.7,
                "y": 34.97569866342649,
                "width": 30,
                "value": false
            },
            {
                "id": "e5b0416c-1ea2-402e-8ae6-95520762b3a5",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 7.5,
                "y": 34.671931956257595,
                "width": 30,
                "value": false
            },
            {
                "id": "aef260c3-6736-4d3f-b8bd-20e05a5db1b3",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 12.6,
                "y": 32.120291616038884,
                "width": 30,
                "value": false
            },
            {
                "id": "2db9d105-a51e-44ba-aab6-9a9b42679831",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 7.6,
                "y": 32.0595382746051,
                "width": 30,
                "value": false
            },
            {
                "id": "1a5f62af-7107-47f8-b6c0-629834213bfb",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 12.3,
                "y": 29.325637910085057,
                "width": 30,
                "value": false
            },
            {
                "id": "942f81f4-34ae-454e-a36e-25c65bfaf930",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 7.5,
                "y": 29.26488456865128,
                "width": 30,
                "value": false
            },
            {
                "id": "479a6fca-a3c5-4577-8b4d-27c984221727",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 12.3,
                "y": 26.470230862697452,
                "width": 30,
                "value": false
            },
            {
                "id": "d51cc6da-093b-4a29-872d-48a486a07b90",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 7.199999999999999,
                "y": 26.227217496962336,
                "width": 30,
                "value": false
            },
            {
                "id": "2b414fd2-463d-4d32-ad58-02738fa5181f",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 12.4,
                "y": 23.371810449574728,
                "width": 30,
                "value": false
            },
            {
                "id": "26ccdb48-4349-41a5-aca3-1f141dae5ae1",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 7.3,
                "y": 23.31105710814095,
                "width": 30,
                "value": false
            },
            {
                "id": "f0ca30b1-9d36-4f55-bb0a-c32f6e1cc426",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 12.3,
                "y": 20.455650060753346,
                "width": 30,
                "value": false
            },
            {
                "id": "3b55ab95-7745-4eb7-b250-eb74812e64d7",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 7.3,
                "y": 20.516403402187123,
                "width": 30,
                "value": false
            },
            {
                "id": "a1723e90-5537-49cc-89d8-a42ab90e512b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 12.4,
                "y": 17.417982989064402,
                "width": 30,
                "value": false
            },
            {
                "id": "e3597f5d-9a0c-40e9-9ce4-10d9b81c9a70",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 7.199999999999999,
                "y": 17.47873633049818,
                "width": 30,
                "value": false
            },
            {
                "id": "977af7ff-1b53-48b3-a31f-758a4d57cbf1",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 59.099999999999994,
                "y": 29.204131227217502,
                "width": 30,
                "value": false
            },
            {
                "id": "17617430-04b3-4945-a7df-de26c862e1a4",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 49.8,
                "y": 29.325637910085057,
                "width": 30,
                "value": false
            },
            {
                "id": "7db911eb-5a2d-4f7a-94fe-6f1b8964416b",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 37.2,
                "y": 29.14337788578372,
                "width": 30,
                "value": false
            },
            {
                "id": "fb905c0d-87e9-469f-b208-48b9e01facf2",
                "type": "text",
                "label": "New text",
                "x": 49.2,
                "y": 31.87727825030377,
                "width": 30,
                "value": ""
            },
            {
                "id": "fa65c02f-0a96-487d-b4d7-46bc28d2aa38",
                "type": "text",
                "label": "New text",
                "x": 25.7,
                "y": 51.86512758201701,
                "width": 65.5,
                "value": "",
                "height": 5.06075334143378
            },
            {
                "id": "eb29ee15-7b53-42db-8a80-35768a1181da",
                "type": "textarea",
                "label": "New textarea",
                "x": 6.5,
                "y": 42.326852976913734,
                "width": 16.6,
                "value": "",
                "height": 8.213851761846906
            },
            {
                "id": "c8c4e3e6-2023-413c-bd4b-7165d6a6c1d4",
                "type": "textarea",
                "label": "New textarea",
                "x": 77.9,
                "y": 42.20534629404617,
                "width": 16.799999999999997,
                "value": "",
                "height": 8.578371810449577
            },
            {
                "id": "5dda45ed-1115-420a-ab5a-27d62190d868",
                "type": "textarea",
                "label": "New textarea",
                "x": 59.8,
                "y": 42.1445929526124,
                "width": 17.5,
                "value": "",
                "height": 8.821385176184693
            },
            {
                "id": "7d68e40f-b193-4d3d-88eb-8e306380192f",
                "type": "textarea",
                "label": "New textarea",
                "x": 42,
                "y": 42.1445929526124,
                "width": 15.899999999999997,
                "value": "",
                "height": 9.125151883353585
            },
            {
                "id": "8cca2e67-ebd7-490a-9844-29235f26597b",
                "type": "textarea",
                "label": "New textarea",
                "x": 24.2,
                "y": 42.08383961117862,
                "width": 17.299999999999997,
                "value": "",
                "height": 8.760631834750914
            },
            {
                "id": "b636ca8d-f924-40d4-8818-0f7a2447748b",
                "type": "text",
                "label": "New text",
                "x": 26.700000000000003,
                "y": 57.33292831105711,
                "width": 17.4,
                "value": "",
                "height": 4.513973268529769
            },
            {
                "id": "2fc44894-de3e-4768-a557-2c826be2e6b9",
                "type": "text",
                "label": "New text",
                "x": 72,
                "y": 68.5722964763062,
                "width": 16.400000000000002,
                "value": "",
                "height": 5.243013365735116
            },
            {
                "id": "e4459caf-8daa-40d6-a12f-e3449eb42aee",
                "type": "text",
                "label": "New text",
                "x": 72.3,
                "y": 64.92709599027947,
                "width": 16.3,
                "value": "",
                "height": 5.303766707168895
            },
            {
                "id": "272cd364-782e-41a9-bd7d-ec24e5a73398",
                "type": "text",
                "label": "New text",
                "x": 71.7,
                "y": 61.28189550425274,
                "width": 17.2,
                "value": "",
                "height": 4.878493317132443
            },
            {
                "id": "c1fd3173-c7df-4ff9-9fb3-8b4080a240e1",
                "type": "text",
                "label": "New text",
                "x": 72.2,
                "y": 57.454434993924664,
                "width": 16.1,
                "value": "",
                "height": 5.364520048602674
            },
            {
                "id": "37146afa-0a80-4f9e-bf62-0ab31531176c",
                "type": "text",
                "label": "New text",
                "x": 26.5,
                "y": 68.51154313487243,
                "width": 17.9,
                "value": "",
                "height": 4.574726609963549
            },
            {
                "id": "755ef438-2203-4b7d-8d5b-3dd26aa82ce9",
                "type": "text",
                "label": "New text",
                "x": 26.5,
                "y": 64.80558930741192,
                "width": 17.4,
                "value": "",
                "height": 3.96719319562576
            },
            {
                "id": "029e0c54-7068-4fe4-8a64-c75098c129bc",
                "type": "text",
                "label": "New text",
                "x": 26.400000000000002,
                "y": 61.28189550425274,
                "width": 17.7,
                "value": "",
                "height": 5.06075334143378
            },
            {
                "id": "f565c0d7-250c-4904-8afd-a764501930a5",
                "type": "text",
                "label": "New text",
                "x": 50.7,
                "y": 72.15674362089915,
                "width": 16.3,
                "value": "",
                "height": 5.182260024301337
            },
            {
                "id": "5660c62a-003a-4df5-b6c9-e86f728861d9",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 77.5,
                "y": 88.681652490887,
                "width": 30,
                "value": false
            },
            {
                "id": "68e3230d-972f-4d6b-80db-8692433f3faa",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 77.60000000000001,
                "y": 86.49453219927096,
                "width": 30,
                "value": false
            },
            {
                "id": "704c1f79-9365-4eb3-9d24-d50d77f08b9c",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 77.5,
                "y": 84.3681652490887,
                "width": 30,
                "value": false
            },
            {
                "id": "952d6af6-5c52-4f5e-be1c-937973d68c04",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 77.3,
                "y": 82.0595382746051,
                "width": 30,
                "value": false
            },
            {
                "id": "c2f3a58c-cbd0-4605-8791-126d165e0392",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 77.2,
                "y": 79.7509113001215,
                "width": 30,
                "value": false
            },
            {
                "id": "c86bf7de-8a6f-44af-b2c2-be33735e4727",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 49.4,
                "y": 88.80315917375457,
                "width": 30,
                "value": false
            },
            {
                "id": "548e61a0-02cf-4b82-b691-e74005b0c8fb",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 49.5,
                "y": 86.43377885783718,
                "width": 30,
                "value": false
            },
            {
                "id": "011e2ace-a017-4f11-8c08-7ffbdb8c4fcd",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 49.5,
                "y": 84.18590522478736,
                "width": 30,
                "value": false
            },
            {
                "id": "166bb627-c631-4868-87b8-26260a13a5fb",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 49.5,
                "y": 81.93803159173754,
                "width": 30,
                "value": false
            },
            {
                "id": "668caeec-c299-4f01-b6cb-4788a6b816ef",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 49.5,
                "y": 79.7509113001215,
                "width": 30,
                "value": false
            },
            {
                "id": "76b217b8-047d-48dd-bdd4-09018658b1fb",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 20.400000000000002,
                "y": 95.54678007290401,
                "width": 30,
                "value": false
            },
            {
                "id": "563eee36-f637-4e47-9fe9-3b260dfb3f42",
                "type": "checkbox",
                "label": "New checkbox",
                "x": 10.8,
                "y": 95.48602673147023,
                "width": 30,
                "value": false
            },
            {
                "id": "edec27dd-c122-4dbc-bbd7-a8f657d1ef67",
                "type": "text",
                "label": "New text",
                "x": 49.7,
                "y": 95.36452004860267,
                "width": 10.100000000000001,
                "value": "",
                "height": 5.425273390036453
            },
            {
                "id": "1bee884e-e237-46b4-9a1f-0e4fd364d625",
                "type": "text",
                "label": "New text",
                "x": 81.10000000000001,
                "y": 95.24301336573512,
                "width": 7.7,
                "value": "",
                "height": 5.364520048602674
            },
            {
                "id": "f9784e58-4c4a-4258-8f13-227c4ad59153",
                "type": "text",
                "label": "New text",
                "x": 81.8,
                "y": 91.41555285540704,
                "width": 11.899999999999999,
                "value": "",
                "height": 4.696233292831106
            },
            {
                "id": "39562074-edfc-453e-918d-edca6a5193d2",
                "type": "text",
                "label": "New text",
                "x": 61,
                "y": 91.41555285540704,
                "width": 12.1,
                "value": "",
                "height": 5.000000000000001
            },
            {
                "id": "b473d90d-1a5a-4585-9210-4413c03724a2",
                "type": "text",
                "label": "New text",
                "x": 37.7,
                "y": 91.41555285540704,
                "width": 11.5,
                "value": "",
                "height": 5.303766707168895
            },
            {
                "id": "3158f9bd-2fb6-4e55-a031-a3920661a731",
                "type": "text",
                "label": "New text",
                "x": 13,
                "y": 91.53705953827462,
                "width": 12.8,
                "value": "",
                "height": 4.756986634264885
            }
        ]
    }
];
