import { Document } from 'mongoose';
export declare enum EstadoSuperficie {
    SANO = "sano",
    CARIES = "caries",
    OBTURADO = "obturado",
    FRACTURA = "fractura",
    AUSENTE = "ausente"
}
export declare class Superficies {
    vestibular?: string;
    distal?: string;
    lingual?: string;
    mesial?: string;
    oclusal?: string;
}
export declare const SuperficiesSchema: import("mongoose").Schema<Superficies, import("mongoose").Model<Superficies, any, any, any, any, any, Superficies>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Superficies, Document<unknown, {}, Superficies, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Superficies & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    vestibular?: import("mongoose").SchemaDefinitionProperty<string | undefined, Superficies, Document<unknown, {}, Superficies, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Superficies & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    distal?: import("mongoose").SchemaDefinitionProperty<string | undefined, Superficies, Document<unknown, {}, Superficies, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Superficies & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lingual?: import("mongoose").SchemaDefinitionProperty<string | undefined, Superficies, Document<unknown, {}, Superficies, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Superficies & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mesial?: import("mongoose").SchemaDefinitionProperty<string | undefined, Superficies, Document<unknown, {}, Superficies, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Superficies & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    oclusal?: import("mongoose").SchemaDefinitionProperty<string | undefined, Superficies, Document<unknown, {}, Superficies, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Superficies & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Superficies>;
export declare class Diente {
    numero?: number;
    superficies?: Superficies;
    estadoGeneral?: string;
    observaciones?: string;
}
export declare const DienteSchema: import("mongoose").Schema<Diente, import("mongoose").Model<Diente, any, any, any, any, any, Diente>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Diente, Document<unknown, {}, Diente, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Diente & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    numero?: import("mongoose").SchemaDefinitionProperty<number | undefined, Diente, Document<unknown, {}, Diente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Diente & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    superficies?: import("mongoose").SchemaDefinitionProperty<Superficies | undefined, Diente, Document<unknown, {}, Diente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Diente & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    estadoGeneral?: import("mongoose").SchemaDefinitionProperty<string | undefined, Diente, Document<unknown, {}, Diente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Diente & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    observaciones?: import("mongoose").SchemaDefinitionProperty<string | undefined, Diente, Document<unknown, {}, Diente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Diente & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Diente>;
export declare class Odontograma extends Document {
    pacienteId?: string;
    fechaEvaluacion?: Date;
    odontologoId?: string;
    dientes?: Diente[];
    estado?: string;
    observacionesGenerales?: string;
}
export declare const OdontogramaSchema: import("mongoose").Schema<Odontograma, import("mongoose").Model<Odontograma, any, any, any, any, any, Odontograma>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Odontograma, Document<unknown, {}, Odontograma, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Odontograma & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Odontograma, Document<unknown, {}, Odontograma, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Odontograma & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pacienteId?: import("mongoose").SchemaDefinitionProperty<string | undefined, Odontograma, Document<unknown, {}, Odontograma, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Odontograma & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fechaEvaluacion?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Odontograma, Document<unknown, {}, Odontograma, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Odontograma & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    odontologoId?: import("mongoose").SchemaDefinitionProperty<string | undefined, Odontograma, Document<unknown, {}, Odontograma, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Odontograma & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dientes?: import("mongoose").SchemaDefinitionProperty<Diente[] | undefined, Odontograma, Document<unknown, {}, Odontograma, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Odontograma & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    estado?: import("mongoose").SchemaDefinitionProperty<string | undefined, Odontograma, Document<unknown, {}, Odontograma, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Odontograma & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    observacionesGenerales?: import("mongoose").SchemaDefinitionProperty<string | undefined, Odontograma, Document<unknown, {}, Odontograma, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Odontograma & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Odontograma>;
