import React from 'react'

const RenderMedications = ({ filteredMedications, currentPage, handleExpandDocument, expandedDocument, handlePageChange }) => {
    if (filteredMedications.length === 0) {
        return null;
    }

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredMedications.slice(startIndex, endIndex);

    return (
        <>
            <ul>
                {currentItems.map((medication) => (
                    <li key={medication.id}>
                        <div>
                            <strong>ID:</strong> {medication.id}
                        </div>
                        <div>
                            <strong>Nome:</strong> {medication.name}
                        </div>
                        <div>
                            <strong>Data de Publicação:</strong> {medication.published_at}
                        </div>
                        <div>
                            <strong>Empresa:</strong> {medication.company}
                        </div>
                        <button onClick={() => handleExpandDocument(medication.id)}>Expandir</button>
                        {expandedDocument === medication.id && (
                            <div>
                                <strong>Documentos:</strong>
                                <ul>
                                    {medication.documents.map((document) => (
                                        <li key={document.id}>
                                            <div>
                                                <strong>Expediente:</strong> {document.expedient}
                                            </div>
                                            <div>
                                                <strong>Id:</strong> {document.id}
                                            </div>
                                            <div>
                                                <strong>Tipo:</strong> {document.type}
                                            </div>
                                            <div>
                                                <strong>URL:</strong> {document.url}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Página Anterior
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentItems.length < itemsPerPage}
                >
                    Próxima Página
                </button>
            </div>
        </>
    );
};

export default RenderMedications;