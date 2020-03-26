@app.route('/api/v1/read_file_json',methods=['POST'])
async def read_file_json(request):
    # with open('static/data_thietbiyte.json') as f:
    #     data = load_json.load(f)

    with open('static/data_thietbiyte.json') as myfile:
        data = myfile.read()
        obj = load_json.loads(data)
        for _ in obj:
            medicalEquipment_new = MedicalEquipment()
            medicalEquipment_new.name = _['name']
            medicalEquipment_new.classify = _['type'][11]
            medicalEquipment_new.implementing_organization_classification = _['organization_action']
            medicalEquipment_new.circulation_number = _['code_document_public']
            medicalEquipment_new.organization_requesting_classification = _['organization_require']
            medicalEquipment_new.status = _['status']
            db.session.add(medicalEquipment_new)
            db.session.commit()

    return json({
        "error_code": "Upload success",
    })